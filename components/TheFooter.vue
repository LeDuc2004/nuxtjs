<template>
  <footer
    class="p-4 flex flex-col gap-4 bg-gray-800 [&>*]:!text-white mt-auto"
  >
    <div class="flex flex-row gap-2 items-center my-2">
      <img src="/movies-sm.webp" width="25" height="25" alt="Logo" />
      <div class="text-xl">Nuxt Movies</div>
    </div>
    <div class="flex flex-row gap-2 items-center">
      <div class="opacity-50 text-sm">Made with</div>
      <a href="https://nuxt.com/" target="_blank" title="Nuxt 3">
        <IconNuxt3 class="h-5" />
      </a>
    </div>
    <div class="flex flex-row gap-2 items-center">
      <p class="text-sm">
        Data provided by&nbsp;
        <a
          class="opacity-100"
          target="_blank"
          href="https://www.themoviedb.org/"
          title="The Movie Database"
          rel="noopener"
        >
          <IconTMDB class="inline h-4" />
        </a>
      </p>
    </div>
    <div class="flex flex-row gap-2 items-center">
      <p class="text-sm">
        This project uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
    <div class="flex gap-4 items-center">
      <ExternalLinks
        :links="{
          twitter_id: 'nuxt_js',
          github_id: 'nuxt/movies',
        }"
      >
        <a
          href="https://vercel.com"
          rel="noopener"
          target="_blank"
          aria-label="go to vercel"
        >
          <IconVercel alt="Vercel" />
        </a>
      </ExternalLinks>

      <LanguageSwitcher />
    </div>
  </footer>
</template>
