<template>
  <Sonner />
  <div v-if="!Ready"
    class="absolute w-screen h-screen top-0 left-0 flex items-center justify-center z-50 bg-background/50 ">
    <Icon icon="mingcute:loading-fill" class="animate-spin text-foreground size-8" />
  </div>
  <div v-if="!LoggedIn" class="w-full h-screen flex items-center justify-center">
    <Button @click="login">
      Login with Google
    </Button>
  </div>
  <SidebarProvider v-else>
    <Sidebar />
    <main>
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup, type AuthError } from 'firebase/auth';
import { app } from './firebase';
import { Button } from './components/ui/button';
import Sonner from './components/ui/sonner/Sonner.vue';
import { toast } from 'vue-sonner';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import Sidebar from './components/dashboard/Sidebar.vue';
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useColorMode } from '@vueuse/core';

const color = useColorMode();

color.value = 'auto';

const Ready = ref(false);
const LoggedIn = ref(false);
let auth = getAuth(app);

onMounted(async () => {
  await auth.authStateReady();
  Ready.value = true;
})

auth.onAuthStateChanged((changeUserState) => {
  LoggedIn.value = changeUserState != undefined;
})

console.log(auth.currentUser);

function login() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
    toast("Logged in!!", {
      description: `Successfully logged in as ${result.user.displayName}`
    })
  }).catch((err: AuthError) => {
    console.error(err);
    toast("Unexpected error happend", {
      description: err.message
    })
  })
}
</script>