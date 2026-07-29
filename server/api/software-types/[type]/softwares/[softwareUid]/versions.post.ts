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

// POST api/software-types/{type}/softwares/{softwareUid}/versions – Create a new version for an existing software

export default defineEventHandler(async (event) => {
    const session = await getUserSession(event);
	if(!session?.user || !session?.loggedInAt) {
		throw createError({
			statusCode: 401,
			statusMessage: "Unauthorized",
			message: "Authentication required to create a software version.",
		})
	}
    const type = getRouterParam(event, "type")!;
    const uid = getRouterParam(event, "softwareUid")!;
    const decodedType = decodeURIComponent(type);
    const decodedUid = decodeURIComponent(uid);
    const version = await readBody(event);
    version.dateAdded = new Date().toISOString();

    if (await provider.existsSoftwareVersion(decodedType, decodedUid, version.version)) {
        throw createError({
            statusCode: 409,
            statusMessage: "Software version already exists",
        });
    }
    const loggerEmail = session.user?.email;
	if(loggerEmail){
		version.creatorEmail = loggerEmail;
	}
    const newSoftware = await provider.pushSoftwareVersion(decodedType, decodedUid, version);
    setResponseStatus(event, 201);
    return newSoftware;
});
