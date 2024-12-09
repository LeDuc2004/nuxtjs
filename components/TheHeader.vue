<script setup>
const title = "User Management";
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
<template>
  <header
    class="shadow-md p-6 py-4 flex justify-between dark:border-b-1 border-teal-600"
  >
    <h1 class="text-xl font-semibold content-center">{{ title }}</h1>
    <ClientOnly v-if="!colorMode?.forced">
      <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        color="neutral"
        variant="ghost"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <div class="size-8" />
      </template>
    </ClientOnly>
  </header>
</template>

<style lang="scss" scope>
@use "~/assets/scss/_header.scss";
</style>
