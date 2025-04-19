<script setup lang="ts">
import { ChevronsUpDown, LogOut, Settings, User2 } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { SidebarMenuButton } from '../ui/sidebar';
import { getAuth } from 'firebase/auth';
import { app } from '@/firebase';

const authentication = getAuth(app);
</script>

<template>
  <DropdownMenu v-if="authentication.currentUser">
    <DropdownMenuTrigger>
      <SidebarMenuButton size="lg">
        <Avatar>
          <AvatarImage :src="authentication.currentUser.photoURL || ''" />
          <AvatarFallback>
            {{ (authentication.currentUser.displayName || 'N')[0] }}
          </AvatarFallback>
        </Avatar>
        <div class="flex flex-col">
          <span class="font-semibold">
            {{ authentication.currentUser.displayName }}
          </span>
          <span class="text-xs">
            {{ authentication.currentUser.email }}
          </span>
        </div>
        <ChevronsUpDown class="size-4 ml-auto" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-[var(--reka-dropdown-menu-trigger-width)]">
      <DropdownMenuLabel class="flex items-center gap-2">
        <Avatar>
          <AvatarImage :src="authentication.currentUser.photoURL || ''" />
          <AvatarFallback>
            {{ (authentication.currentUser.displayName || 'N')[0] }}
          </AvatarFallback>
        </Avatar>
        <div class="flex flex-col">
          <span class="font-semibold">
            {{ authentication.currentUser.displayName }}
          </span>
          <span class="text-xs">
            {{ authentication.currentUser.email }}
          </span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <RouterLink to="/user/">
          <DropdownMenuItem>
            <User2 /> Hesap
          </DropdownMenuItem>
        </RouterLink>
        <DropdownMenuItem>
          <Settings /> Ayarlar
        </DropdownMenuItem>
        <DropdownMenuItem @click="authentication.signOut()">
          <LogOut /> Çıkış Yap
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>