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
// Compare two semantic version strings (X.Y.Z format)
export const compareSemver = (a: string, b: string): number => {
    const aParts = a.split('.').map(p => parseInt(p, 10));
    const bParts = b.split('.').map(p => parseInt(p, 10));

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
        const aPart = aParts[i] || 0;
        const bPart = bParts[i] || 0;
        if (aPart !== bPart) {
            return aPart - bPart;
        }
    }
    return 0;
};