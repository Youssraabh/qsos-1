/********************************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { provider } from "~/services/data-providers/current-provider";
import { requireOwnerOrAdmin } from "~~/server/utils/auth";
// DELETE api/software-types/{softwareType}/softwares/{softwareUid} – Delete an existing software

export default defineEventHandler(async (event) => {
	const session = await getUserSession(event);
	if (!session?.user || !session?.loggedInAt) {
		throw createError({
			statusCode: 401,
			statusMessage: "Unauthorized",
			message: "Authentication required to delete a software.",
		})
	}
	const softwareUid = getRouterParam(event, "softwareUid");
	const type = getRouterParam(event, "type");

	if (!softwareUid)
		throw createError({
			statusCode: 404,
			statusMessage: "UID is required",
		});

	if (!type)
		throw createError({
			statusCode: 404,
			statusMessage: "Software type is required",
		})

	const current = await provider.getSoftware(type, softwareUid);
	if (!current) throw createError({ statusCode: 404, statusMessage: "Software not found" });
	await requireOwnerOrAdmin(event, current.creatorEmail ?? null);

	await provider.deleteSoftware(type, softwareUid);
});
