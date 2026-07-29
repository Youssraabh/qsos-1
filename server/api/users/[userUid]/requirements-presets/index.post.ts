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
import type { RequirementPreset } from "~~/types/requirements";
import { nanoid } from "nanoid";

// POST api/users/{userUid}/requirments-presets – Create a new requirement preset
export default defineEventHandler(async (event) => {
    const session = await getUserSession(event);
	if(!session?.user || !session?.loggedInAt) {
		throw createError({
			statusCode: 401,
			statusMessage: "Unauthorized",
			message: "Authentication required to create a requirement preset.",
		})
	}
    const userUid = getRouterParam(event, "userUid");
    const preset = await readBody<Omit<RequirementPreset, 'presetUid' | 'createdAt' | 'updatedAt'>>(event);

    if (!userUid) {
        throw createError({
            statusCode: 404,
            statusMessage: "User UID is required",
        });
    }

    if (!preset.label || !preset.label.trim()) {
        throw createError({
            statusCode: 400,
            statusMessage: "Preset label is required",
        });
    }

    
    const fullPreset: RequirementPreset = {
        ...preset,
        presetUid: nanoid(),
        userUid: userUid,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    return await provider.pushRequirementPreset(fullPreset);
});
