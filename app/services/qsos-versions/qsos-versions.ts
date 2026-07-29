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
import type { QsosVersion } from "~~/types/qsos-version";
import { qsosVersion2_0 } from "./2.0";

export const QSOS_VERSIONS: { [version: string]: QsosVersion } = {
    "2.0": qsosVersion2_0,
}