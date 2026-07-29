
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
        <LoadingHandler :status="status" :error="error" :refresh="refresh" />
        <nav>
            <NuxtLink :to="`/software-types/${route.params.type}`" class="button">
                <Icon name="uil:arrow-left" :title="$t('grids_index.back')" />{{$t('grids_index.back_to_type', {type:  softwareType?.name ?? route.params.type })}}
            </NuxtLink>
        </nav>
        <template v-if="softwareType">
            <h2>{{$t('grids_index.title', {name: softwareType?.name })}}</h2>
            <EvaluationGridList :type="softwareType" />
        </template>
    </div>
</template>

<script lang="ts" setup>
import type { SoftwareType } from '~~/types/software';
import EvaluationGridList from '~/components/evaluation-grids/EvaluationGridList.vue';

const route = useRoute();

const { data: softwareType, status, error, refresh } = await useFetch<SoftwareType>(`/api/software-types/${route.params.type}`)
</script>

<style scoped>

</style>