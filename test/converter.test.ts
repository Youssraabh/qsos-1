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
// @vitest-environment nuxt
import { expect, test } from "vitest";
import path from "node:path";
import { readdir, readFile } from "node:fs/promises";
import {
	convertEvaluationToLegacyXML,
	parseLegacyXMLToEvaluation,
} from "../app/services/converter";

test("test converter between TypeScript and XML format", async () => {
	const xmlFiles = await readdir("./test/legacy/xml");
	for (const xmlFile of xmlFiles) {
		const xml = await readFile(path.join("./test/legacy/xml", xmlFile), {
			encoding: "utf-8",
		});
		const obj = await parseLegacyXMLToEvaluation(xml);
		const obj2 = await parseLegacyXMLToEvaluation(
			convertEvaluationToLegacyXML(obj),
		);
		expect(obj2).toMatchObject(obj);
	}
});
