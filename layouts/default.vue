<template>
  <div class="flex h-screen">
    <NavMenu
      class="p-4 min-w-[210px] bg-[#0f172b] dark:border-r-1 border-teal-600"
    />
    <div class="flex-1 flex flex-col">
      <TheHeader />
      <main class="p-6 flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
