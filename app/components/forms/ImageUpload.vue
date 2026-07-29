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
    <div class="image-upload" >
        <input type="file" @change="onFileChange" :id="id" :disabled="disabled" />
        <div class="image-preview" v-if="imageUrl">
            <img :src="imageUrl" :width="previewWidth" :height="previewHeight" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const imageUrl = defineModel<string>();
const { id, previewHeight, previewWidth, disabled } = defineProps<{ id: string, previewWidth?: number, previewHeight?: number, disabled?: boolean }>();
function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imageUrl.value = reader.result as string;
        };
        reader.readAsDataURL(file);
    } else {
        imageUrl.value = '';
    }
}
</script>

<style scoped>
input[type="file"] {
    margin-bottom: 0.5em;
}

.image-upload {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.image-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: var(--background-color);
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 0.5em;
}
</style>