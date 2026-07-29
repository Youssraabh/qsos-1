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

// GET api/software-types/{typeUid}/softwares/{softwareUid}/versions – Get the list of versions for an existing software

export default defineEventHandler(async (event) => {
    const type = getRouterParam(event, "type");
    const softwareUid = getRouterParam(event, "softwareUid");

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

    const decodedType = decodeURIComponent(type);
    const decodedSoftwareUid = decodeURIComponent(softwareUid);
    return await provider.getSoftwareVersions(decodedType, decodedSoftwareUid);
});
