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
    <p v-if="status === 'pending'">{{ $t('loading.pending') }}</p>
    <template v-else-if="status === 'error'">
        <p class="error">{{ error }}</p>
        <button @click="ev => refresh()">{{ $t('loading.retry') }}</button>
    </template>
</template>

<script setup lang="ts">
import type { FetchError } from 'ofetch';
const { status, error, refresh } = defineProps<{ status: string, error: FetchError<any> | undefined | null, refresh: () => void }>();
</script>