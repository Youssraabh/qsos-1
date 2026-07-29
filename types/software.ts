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
export type SoftwareType = {
	uid: string;
	name: string; // label
	description: string; // short description of the type of software
	icon?: string; // icon url
	creatorEmail?: string;
	createdAt?: string;
	updatedAt?: string;
};

export type SoftwareFileData = {
	uid: string;
	name: string; // Application/software name
	description: string; // short description of the software
	licenseId: string; // Identifier of the main license, taken from https://spdx.org/licenses/
	url: string; // URL of the software website
	demoUrl?: string; // URL of the demo website
	icon?: string; // icon url
	creatorEmail?: string;
	createdAt?: string;
	updatedAt?: string;
}

export type Software = SoftwareFileData & {
	type: SoftwareType;
	versions: SoftwareVersion[];
};

export type SoftwareVersion = {
	version: string;
	dateAdded: string;
	summary: string;
	creatorEmail?: string;
	createdAt?: string;
	updatedAt?: string;
};
