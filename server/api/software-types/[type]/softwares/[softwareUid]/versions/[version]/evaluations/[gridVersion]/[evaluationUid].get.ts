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

// GET api/software-types/{typeUid}/softwares/{softwareUid}/evaluations/{evaluationUid} – Get an existing software evaluation data

export default defineEventHandler(async (event) => {
    const type = decodeURIComponent(getRouterParam(event, "type") || "");
    const softwareUid = decodeURIComponent(getRouterParam(event, "softwareUid") || "");
    const version = decodeURIComponent(getRouterParam(event, "version") || "");
    const gridVersion = decodeURIComponent(getRouterParam(event, "gridVersion") || "");
    const evaluationUid = decodeURIComponent(getRouterParam(event, "evaluationUid") || "");

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
    if (!gridVersion)
        throw createError({
            statusCode: 404,
            statusMessage: "Grid version is required",
        });
    if (!evaluationUid)
        throw createError({
            statusCode: 404,
            statusMessage: "Evaluation UID is required",
        });

    return await provider.getEvaluation(type, softwareUid, version, gridVersion, evaluationUid);
});