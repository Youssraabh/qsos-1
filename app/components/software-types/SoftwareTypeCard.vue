<!--
  Copyright (c) 2026 Contributors to the Eclipse Foundation

  See the NOTICE file(s) distributed with this work for additional
  information regarding copyright ownership.

  This program and the accompanying materials are made available under the
  terms of the Apache License, Version 2.0 which is available at
  https://www.apache.org/licenses/LICENSE-2.0

  SPDX-License-Identifier: Apache-2.0
-->
<template>
    <div class="card" :class="{ link }"
        @click="link && navigateTo({ path: `/software-types/${type.uid}`, query: { intent } })">
        <img :src="type.icon ?? DEFAULT_SOFTWARE_ICON" alt="Icon" width="48" height="48" />
        <h2>{{ type.name }}</h2>
        <p>{{ type.description }}</p>
    </div>
</template>

<script setup lang="ts">
import DEFAULT_SOFTWARE_ICON from '~/assets/images/default_software_icon.svg';
import type { SoftwareType } from '~~/types/software';

const intent = useRoute().query.intent as string;
const { type, link = false } = defineProps<{ type: SoftwareType, link?: boolean }>();
</script>

<style scoped>
.card {
    display: grid;
    grid-template-columns: 48px 1fr;
    align-items: center;
    gap: 2px 8px;
}

h2 {
    margin: 0.25em;
}

p {
    grid-column: 1/3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>