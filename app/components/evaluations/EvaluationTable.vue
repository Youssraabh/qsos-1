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
  <div v-if="evaluations?.length">
    <SortableTable :columns="columns" :rows="props.evaluations" :rowKey="row => row.evaluationUid"
      class="evaluation-table" @rowClick="navigateToDetail">
      <template #authors="{ row }">
        {{ formatAuthors(row.authors) }}
      </template>
      <template #createdAt="{ row }">
        {{ formatDate(row.createdAt) }}
      </template>
    </SortableTable>
  </div>
  <p v-else>{{ $t('evaluation_table.no_evaluations') }}</p>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import SortableTable from '~/components/SortableTable.vue'
import { useI18n } from 'vue-i18n'
const props = defineProps<{
  evaluations: Array<any>
}>()

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const columns = computed(() =>[
  { key: 'authors', label: t('evaluation_table.authors'), sortable: true },
  { key: 'createdAt', label: t('evaluation_table.creation_date'), sortable: true },
])

function navigateToDetail(row: any) {
  const type = route.params.type
  const softwareUid = route.params.softwareUid
  const version = row.softwareVersion
  const gridVersion = row.gridVersion
  const uid = row.evaluationUid
  router.push(`/software-types/${type}/softwares/${softwareUid}/versions/${version}/evaluations/${gridVersion}/${uid}`)
}

function formatAuthors(authors?: Array<{ name: string }>): string {
  return authors?.map(a => a.name).join(', ') || '—'
}

function formatDate(date?: string): string {
  return date ? new Date(date).toLocaleDateString() : '—'
}
</script>

<style scoped>
.evaluation-table {
  width: 100%;
  border-collapse: collapse;
}

.evaluation-table th,
.evaluation-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.clickable {
  cursor: pointer;
}
</style>