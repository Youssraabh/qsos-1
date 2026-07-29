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

// PUT api/software-types/{type}/softwares/{uid} – Update an existing software

export default defineEventHandler(async (event) => {
	const session = await getUserSession(event);
	if (!session?.user || !session?.loggedInAt) {
		throw createError({
			statusCode: 401,
			statusMessage: "Unauthorized",
			message: "Authentication required to update a software.",
		})
	}
	const softwareUid = getRouterParam(event, "softwareUid");
	const type = getRouterParam(event, "type");
	const body = await readBody(event);

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

	const decodedType = decodeURIComponent(type);
	const decodedSoftwareUid = decodeURIComponent(softwareUid);

	const current = await provider.getSoftware(decodedType, decodedSoftwareUid);
	if (!current) throw createError({ statusCode: 404, statusMessage: "Software not found" });
	await requireOwnerOrAdmin(event, current.creatorEmail ?? null);

	const updatedSoftware = await provider.pushSoftware(body, decodedType, decodedSoftwareUid);
	return updatedSoftware;
});
