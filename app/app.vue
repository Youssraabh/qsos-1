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
  <NuxtRouteAnnouncer />
  <Header />
  <main id="page">
    <NuxtPage />
  </main>
  <Footer />
</template>

<style>
#page {
  padding: 0 2em calc(0.5em + 48px) 2em;
  /* 48px = footer height */
  max-width: 100%;
  overflow: auto;
}

.page-leave-active {
  transition: opacity 150ms;
}

.page-enter-active {
  transition: all 300ms;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.page-leave-to {
  opacity: 0;
}
</style>
