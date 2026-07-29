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

export function useDraft<T>(key: string) {
  if (!import.meta.client) return { save: () => {}, load: () => null, clear: () => {} }

  const storageKey = `qsos_draft_${key}`

  const save = (data: T): void => {
    localStorage.setItem(storageKey, JSON.stringify(data))
  }

  const load = (): T | null => {
    const stored = localStorage.getItem(storageKey)
    return stored ? (JSON.parse(stored) as T) : null
  }

  const clear = (): void => {
    localStorage.removeItem(storageKey)
  }

  return { save, load, clear }
}
