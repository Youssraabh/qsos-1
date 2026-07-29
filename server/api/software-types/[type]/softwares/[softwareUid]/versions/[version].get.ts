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

// GET api/software-types/{typeUid}/softwares/{softwareUid}/version/{version} – Get an existing software version data

export default defineEventHandler(async (event) => {
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

    const decodedType = decodeURIComponent(type);
    const decodedSoftwareUid = decodeURIComponent(softwareUid);
    const decodedVersion = decodeURIComponent(version);

    return await provider.getSoftwareVersion(decodedType, decodedSoftwareUid, decodedVersion) ?? createError({
        statusCode: 404,
        statusMessage: "Software version not found",
    });
});
