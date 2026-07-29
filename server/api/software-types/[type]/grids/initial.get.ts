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

import { QSOS_VERSIONS } from "~/services/qsos-versions/qsos-versions";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const qsosVersion = query.version as string || '2.0';

    if (!QSOS_VERSIONS[qsosVersion]) {
        throw createError({
            statusCode: 400,
            statusMessage: `Unsupported QSOS version: ${qsosVersion}`
        });
    }
    return {
        qsosVersion,
        maturitySection: QSOS_VERSIONS[qsosVersion].maturitySection
    }
});