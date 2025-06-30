<script setup lang="ts">
</script>

<template>
  <div class="text-center py-2">
    <div class="my-6 flex justify-center items-center gap-3">
      <Icon name="logos:nuxt-icon" class="text-4xl" />
      <Icon name="ri:add-line" class="text-3xl" />
      <Icon name="logos:vue" class="text-4xl" />
      <Icon name="ri:add-line" class="text-3xl" />
      <Icon name="logos:vitejs" class="text-4xl" />
      <Icon name="ri:add-line" class="text-3xl" />
      <Icon name="logos:tailwindcss-icon" class="text-4xl" />
    </div>
    <div class="text-5xl py-2 mb-2 font-display">
      {{ $t('home.hello') }}
    </div>
    <div class="text-xs ">
      GTemplate For Nuxt 3
    </div>
    <div class="text-xs text-gray-500">
      <span>创建于：</span>
      <NuxtTime :datetime="new Date('2025-06-26')" locale="zh-CN" relative />
    </div>
    <input type="text">
  </div>
</template>
