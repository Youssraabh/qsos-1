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
export type Path = string[]
export type PathSegment = { [key: string]: any }

export function getValueAtPath(root: PathSegment, path: Path): any {
    return path.reduce((node, key) => node?.[key] ?? {}, root);
}

export function getParentForPath(root: { [key: string]: any }, path: Path) {
    return getValueAtPath(root, path.slice(0, -1));
}

export function setValueAtPath(root: PathSegment, path: Path, value: any) {
    const lastKey = path.pop();
    if (lastKey === undefined) throw new Error('Path cannot be empty');
    const parent = path.reduce((node, key) => node[key] ??= {}, root);
    parent[lastKey] = value;
    return root;
}