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
        @click="link && navigateTo(`/software-types/${evaluationGrid.softwareType.uid}/grids/${evaluationGrid.gridVersion}`)">
        <h2>{{$t('evaluation_grid_card.title')}} {{ evaluationGrid.gridVersion }}</h2>
        <p>{{$t('evaluation_grid_card.created_at')}} {{ new Date(evaluationGrid.createdAt).toLocaleString() }}</p>
        <p>{{$t('evaluation_grid_card.author')}} {{ evaluationGrid.creatorEmail }}</p>
        <p>{{$t('evaluation_grid_card.last_modified')}} {{ new Date(evaluationGrid.updatedAt).toLocaleString() }}</p>
        <p>{{$t('evaluation_grid_card.changelog')}} {{ evaluationGrid.changeLog }}</p>
    </div>
</template>

<script setup lang="ts">
import type { EvaluationGrid } from '~~/types/evaluation';

const { evaluationGrid, link = false } = defineProps<{ evaluationGrid: EvaluationGrid, link?: boolean }>();

</script>

<style scoped>
h2 {
    margin: 0
}

p {
    grid-column: 1/3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
}
</style>