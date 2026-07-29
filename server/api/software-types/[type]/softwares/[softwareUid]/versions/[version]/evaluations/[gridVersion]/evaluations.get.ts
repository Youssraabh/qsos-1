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

export default defineEventHandler(async (event) => {
    const type = decodeURIComponent(getRouterParam(event, "type") || "");
    const softwareUid = decodeURIComponent(getRouterParam(event, "softwareUid") || "");
    const softwareVersion = decodeURIComponent(getRouterParam(event, "version") || "");
    const gridVersion = decodeURIComponent(getRouterParam(event, "gridVersion") || "");
    

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

    if (!softwareVersion)
        throw createError({
            statusCode: 404,
            statusMessage: "Software version is required",
        });

    if (!gridVersion)
        throw createError({
            statusCode: 404,
            statusMessage: "Grid version is required",
        });

    const evaluations = await provider.getEvaluations(type, softwareUid, softwareVersion, gridVersion);
    return evaluations;
});