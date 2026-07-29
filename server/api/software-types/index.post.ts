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
import { defineEventHandler, readBody } from "h3";
import { provider } from "~/services/data-providers/current-provider";

// POST api/software-types – Add a new type of software

export default defineEventHandler(async (event) => {
	const session = await getUserSession(event);
	if(!session?.user || !session?.loggedInAt) {
		throw createError({
			statusCode: 401,
			statusMessage: "Unauthorized",
			message: "Authentication required to create a software type.",
		})
	}
	
	const type = await readBody(event);
	const loggerEmail = session.user?.email;
	if(loggerEmail){
		type.creatorEmail = loggerEmail;
	}
	const newType = await provider.pushSoftwareType(type);
	setResponseStatus(event, 201);
	return newType;
});
