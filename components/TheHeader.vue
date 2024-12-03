<template>
  <header
    class="flex justify-between items-center py-4 px-6 bg-gray-800 text-white"
  >
    <!-- Logo Section -->
    <a href="/" class="flex items-center">
      <img src="/movies-sm.webp" width="25" height="25" alt="Logo" />
      <span class="ml-2 text-xl font-bold">Nuxt Movies</span>
    </a>

    <!-- Navigation Links -->
    <nav class="flex space-x-6">
      <a href="/tv" class="hover:text-gray-400">TV Shows</a>
      <a href="/movies" class="hover:text-gray-400">Movies</a>
      <a href="/search" class="hover:text-gray-400">Search</a>
    </nav>
  </header>
</template>
