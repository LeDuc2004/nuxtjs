<script setup lang="ts">
const data = ref(userData)
</script>

<template>
  <UTable :data="data" class="flex-1" />
</template>
