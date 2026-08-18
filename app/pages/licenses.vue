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
    <div>
        <nav>
            <NuxtLink :to="`/`" class="button">
                <Icon name="uil:arrow-left" :title="$t('licenses.back')" />{{ $t('licenses.back_homepage') }}
            </NuxtLink>
        </nav>
        <h1 class="ribbon-define">{{ $t('licenses.title') }}</h1>
        <p v-if="loading">{{ $t('licenses.loading') }}</p>
        <p v-else-if="licenses.length === 0">{{ $t('licenses.no_data') }}</p>
        <template v-else>
            <div class="search">
                <label for="license-search">{{ $t('licenses.search_label') }}</label>
                <input id="license-search" v-model="search" type="search" :placeholder="$t('licenses.search_placeholder')">
                <button v-if="search" type="button" class="button" @click="search = ''">
                    {{ $t('licenses.search_clear') }}
                </button>
            </div>
            <p v-if="filteredLicenses.length === 0">{{ $t('licenses.no_results', { query: search }) }}</p>
            <table v-else>
            <thead>
                <tr>
                    <th>{{ $t('licenses.ref') }}</th>
                    <th>{{ $t('licenses.license_id') }}</th>
                    <th>{{ $t('licenses.name') }}</th>
                    <th>{{ $t('licenses.osi_approved') }}</th>
                    <th>{{ $t('licenses.see_also') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="license in filteredLicenses" :key="license.licenseId">
                    <td><a :href="license.reference" target="_blank">{{ license.referenceNumber }}</a></td>
                    <td>{{ license.licenseId }}</td>
                    <td>{{ license.name }}</td>
                    <td class="centered">{{ license.isOsiApproved ? $t('licenses.yes') : $t('licenses.no') }}</td>
                    <td><a v-for="link in license.seeAlso" target="_blank" :key="link" :href="link">{{ link }}</a></td>
                </tr>
            </tbody>
            </table>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { LicenseInfo, LicenseExceptionInfo } from '~~/types/license'
const licenses = ref<LicenseInfo[]>([])
const loading = ref(true)
const search = ref('')

const filteredLicenses = computed(() => {
    const query = search.value.trim().toLowerCase()
    if (!query) return licenses.value
    return licenses.value.filter(license =>
        license.name.toLowerCase().includes(query)
        || license.licenseId.toLowerCase().includes(query))
})

onMounted(async () => {
    loading.value = true
    try {
        const response = await $fetch<{ licenses: LicenseInfo[], exceptions: LicenseExceptionInfo[] }>('/api/licenses')
        licenses.value = response.licenses
    } catch {
        licenses.value = []
    } finally {
        loading.value = false
    }
})
</script>

<style scoped>
.search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.search input {
    flex: 1;
    min-width: 12rem;
    padding: 0.4rem 0.6rem;
}

table td:last-child a {
    display: block;
    font-size: small;
    word-break: break-word;
}
</style>