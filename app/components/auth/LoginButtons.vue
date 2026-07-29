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
  <nav>
    <button @click="loginWithGitHub">
      <Icon size="1.5em" name="uil:github" title="GitHub" />
      {{ $t('auth.signin_github') }}
    </button>
    <button @click="loginWithGitLab">
      <Icon size="1.5em" name="uil:gitlab" title="Gitlab" />
      {{ $t('auth.signin_gitlab') }}
    </button>
  </nav>
</template>

<script setup>


const loginWithGitHub = () => {
  window.location.href = '/auth/github';
};

const loginWithGitLab = () => {
  window.location.href = '/auth/gitlab';
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-top: 2em;
}
</style>