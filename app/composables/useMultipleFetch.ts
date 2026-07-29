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

import { FetchError } from 'ofetch';
type T = ReturnType<typeof useFetch>
type Status = T["status"]
type Data = T["data"]


export function useMultipleFetch(fetchResults: ReturnType<typeof useFetch>[]) {
    // Create a ref for combined status
    const combinedStatus: Status = computed(() => {
        if (fetchResults.some(result => result.status.value === 'error')) return 'error'
        if (fetchResults.some(result => result.status.value === 'pending')) return 'pending'
        if (fetchResults.every(result => result.status.value === 'success')) return 'success'
        return "idle"
    })

    const firstError = computed(() => {
        return (fetchResults.find(result => result.error) ?? null) as any as FetchError<any> | null
    })

    const combinedData: Data[] = fetchResults.map(result => result.data)

    const refresh = () => { fetchResults.forEach(result => result.refresh()); }
    const clear = () => { fetchResults.forEach(result => result.clear()); }

    return { status: combinedStatus, refresh, clear, error: firstError, data: combinedData };
}