<script setup lang="ts">
import router from '@/router';
import { SidebarTrigger } from '../ui/sidebar';

</script>

<template>
  <header class="h-12 flex items-center gap-4">
    <SidebarTrigger />
    <span>
      {{ router.currentRoute.value.name }}
    </span>
  </header>
</template>