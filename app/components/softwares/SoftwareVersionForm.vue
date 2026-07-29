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
    <form @submit.prevent="emit('submit')">
        <label v-if="!hideSubmit" for="creator-email">{{ $t('software_version_form.author_email') }} {{version.creatorEmail}}</label>
        <label>{{ $t('software_version_form.version') }} </label>
        <input type="text" v-model="version.version" :disabled="!canEdit" required />

        <label>{{ $t('software_version_form.summary') }} </label>
        <textarea v-model="version.summary" :disabled="!canEdit" required
            :placeholder = "$t('software_version_form.summary_placeholder')" ></textarea>

        <button v-if="!hideSubmit" type="submit" :disabled="!canEdit">{{ $t('software_version_form.submit') }} </button>
    </form>
</template>

<script setup lang="ts">
import { type SoftwareVersion } from '~~/types/software';

const version = defineModel<SoftwareVersion>({
    default: {
        version: '',
        summary: '',
        dateAdded: new Date().toISOString(),
        creatorEmail: ''
    }
});

const emit = defineEmits(['submit']);
const { hideSubmit = false, canEdit = true } = defineProps<{ hideSubmit?: boolean; canEdit?: boolean }>();
const { user } = useUserSession();
const meEmail = computed(() => (user.value?.email || '').trim());

onMounted(() => {
    if (!version.value.creatorEmail && meEmail.value) {
        version.value.creatorEmail = meEmail.value;
    }
});

watch(meEmail, (newEmail) => {
    if (!version.value.creatorEmail && newEmail) {
        version.value.creatorEmail = newEmail;
    }
});

const creatorEmail = computed(() => version.value.creatorEmail || meEmail.value || '');
</script>