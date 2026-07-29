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

// GET api/users/{userUid}/requirments-presets - Get all requirement presets for a user

export default defineEventHandler(async (event) => {
    const userUid = getRouterParam(event, "userUid");
    const query = getQuery(event);
    const softwareTypeUid = query.softwareTypeUid?.toString();
    const gridVersion = query.gridVersion?.toString();

    if(!userUid){
        throw createError({
            statusCode: 404,
            statusMessage: "User UID is required",
        });
    }
    if(!softwareTypeUid){
        throw createError({
            statusCode: 404,
            statusMessage: "Software type UID is required",
        });
    }

    return await provider.getRequirementPresets(userUid, softwareTypeUid, gridVersion);

});
