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
  <button @click="logout" class="logout-button">
    {{$t('auth.logout')}}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
const { t } = useI18n(); 

const router = useRouter();
const { $auth } = useNuxtApp();

const logout = async () => {
  try {
    await $auth.logout();

    router.push('/');
  } catch (error) {
    console.error(t('auth.error_logout'), error.message);
  }
};
</script>

<style scoped>
.logout-button {
  padding: 10px 15px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #d32f2f;}
</style>
