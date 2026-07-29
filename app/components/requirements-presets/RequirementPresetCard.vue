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
    <div class="card" :class="{link}"
    @click="link && navigateTo(`/users/${userUid}/requirements-presets/${preset.presetUid}`)">
    <div class="preset-icon">
        <Icon name="uil:bookmark" size="32"/>
    </div>
        <h3>{{ preset.label }}</h3>
        <p>{{ preset.softwareTypeUid }} - v{{ preset.gridVersion }}</p>
        <small class="preset-dates">
            <p>{{ $t('requirement_preset_card.created') }} {{ createdAt }}</p>
            <p>{{ $t('requirement_preset_card.modified') }} {{ modifiedAt}}</p>

        </small>
    </div>
</template>

<script lang="ts">
import type { RequirementPreset } from '~~/types/requirements';

export default {
    props: {
        preset: {
            type: Object as () =>RequirementPreset,
            required: true
        },
        userUid: {
            type: String,
            required: true
        },
        link: {
            type: Boolean,
            default: false
        }


    },
    computed: {
        createdAt() {
            return this.preset.createdAt
            ? new Date(this.preset.createdAt).toLocaleDateString()
            : '-'
        },
        modifiedAt() {
            return this.preset.updatedAt
            ? new Date(this.preset.updatedAt).toLocaleDateString()
            : '-'
        },
    }
};

</script>
<style scoped>
.card{
    display: grid;
    grid-template-columns: 32px 1fr;
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
    margin: 0.25em 0;
}

.preset-dates {
    grid-column: 1/3;
    color: var(--text-color-secondary, #666);
    font-size: 0.8em;
}

</style>