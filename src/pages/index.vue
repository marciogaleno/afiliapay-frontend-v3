<route lang="yaml">
meta:
requiresAuth: true
</route>
<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'
import SidebarLayout from '/@src/layouts/SidebarLayout.vue'

pageTitle.value = 'Sales Dashboard'
useHead({
  title: 'Sales Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <NavbarDropdownLayout>
    <div class="page-content-inner">
      <SalesDashboard />
    </div>
  </NavbarDropdownLayout>
</template>
