<script setup lang="ts">
defineProps({
  class: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div :class="class">
    <NuxtLink to="/dash_board" class="logo flex items-center mb-3">
      <img class="w-10" src="/movies.png" />
      <h1 class="text-[#0deac7] text-4xl font-black">an alpha</h1>
    </NuxtLink>
    <UNavigationMenu orientation="vertical" :items="navLinks" />
  </div>
</template>
