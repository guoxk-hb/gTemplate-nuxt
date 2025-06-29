<script setup lang="ts">

</script>

<template>
  <div class="text-center">
    <div class="py-2 text-2xl">
      [Header]
    </div>
    <header class="flex gap-4 justify-center items-center">
      <button class="!outline-none">
        <Icon name="ri:github-line" class="text-xl" />
      </button>
      <LocalesToggle />
      <DarkToggle />
    </header>
  </div>
</template>
