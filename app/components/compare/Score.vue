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
    <span class="score" :style="{ color: getColor(score) }">{{ score === null ? '-' : score.toFixed(2) }}</span>
</template>

<script lang="ts" setup>
const { score } = defineProps<{ score: number | null }>();

function getColor(score: number | null): string {
    if (score === null) return "black";
    return `hsl(${(score * 40)}, 100%, 40%)`;
}
</script>

<style scoped>
.score {
    text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);
}
</style>