<script setup lang="ts">
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel } from '../ui/sidebar';
import SidebarUserWidget from './SidebarUserWidget.vue';
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>
          Notes
        </SidebarGroupLabel>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarUserWidget />
    </SidebarFooter>
  </Sidebar>
</template>