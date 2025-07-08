<script setup lang="ts">
</script>

<template>
  <footer class="text-center text-2xl">
    <!-- <div class="text-xs my-2 text-gray-700">
      <span>创建于：</span>
      <NuxtTime :datetime="new Date('2025-06-26')" locale="zh-CN" relative />
    </div> -->
    <div class="flex gap-4 justify-center items-center ">
      <a class="!outline-none cursor-pointer" href="https://github.com/guoxk-hb/gTemplate-nuxt" target="_blank">
        <Icon name="ri:github-line" class="text-xl" />
      </a>
      <LocalesToggle />
      <DarkToggle />
    </div>
    <!-- <div class="text-sm my-1 text-gray-500">
      GTemplate For Nuxt 3
    </div> -->
  </footer>
</template>
