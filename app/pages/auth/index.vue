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
    <div v-if="loggedIn && user">
      <h1>{{ $t('auth.welcome') }}</h1>
      <p>{{ $t('auth.connected_as') }} <a @click="goToProfile">{{ user.email }}</a></p>
      <button @click="clear">{{ $t('auth.logout') }}</button>
    </div>
    <div v-else>
      <h1>{{ $t('auth.not_signed_in') }}</h1>
      <p>{{ $t('auth.sign_in_to_contribute') }}</p>
      <LoginButtons />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginButtons from '~/components/auth/LoginButtons.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const { loggedIn, user, clear } = useUserSession();

const goToProfile = () => {
  router.push('/profile');
};
</script>