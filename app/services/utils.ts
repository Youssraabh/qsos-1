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
export function getRefFromName(name: string) {
    return name
        .toLowerCase() // force casing
        .trim() // remove leading/trailing spaces
        .replace(/ /g, '_') // replace inner spaces with underscores
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // replace diacritics
}

export function pickRandomIn<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)] as T;
}