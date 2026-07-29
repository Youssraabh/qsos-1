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
// DELETE api/software-types/{typeUid}/softwares/{softwareUid}/versions/{version} – Delete an existing software version

export default defineEventHandler(async (event) => {
    const session = await getUserSession(event);
    if (!session?.user || !session?.loggedInAt) {
        throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
            message: "Authentication required to delete a software version.",
        })
    }
    const type = getRouterParam(event, "type");
    const softwareUid = getRouterParam(event, "softwareUid");
    const version = getRouterParam(event, "version")?.toString();

    if (!softwareUid)
        throw createError({
            statusCode: 404,
            statusMessage: "Software UID is required",
        });

    if (!type)
        throw createError({
            statusCode: 404,
            statusMessage: "Software type is required",
        });

    if (!version)
        throw createError({
            statusCode: 404,
            statusMessage: "Software version is required",
        });


    const current = await provider.getSoftwareVersion(type, softwareUid, version);
    if (!current) throw createError({ statusCode: 404, statusMessage: "Software version not found" });
    await requireOwnerOrAdmin(event, current.creatorEmail ?? null);

    return await provider.deleteSoftwareVersion(type, softwareUid, version);
});
