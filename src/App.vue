<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import SignIn from "./components/views/SignIn.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
    <SignIn />
  </router-view>
</template>

<style lang="sass">
// App
</style>
