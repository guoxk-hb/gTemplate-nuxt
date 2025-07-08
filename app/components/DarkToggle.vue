<script setup lang="ts">
const colorMode = useColorMode()

type ColorModePreference = 'dark' | 'light' | 'system'

const themeIcon: Record<ColorModePreference, string> = {
  dark: 'ri:moon-line',
  light: 'ri:sun-line',
  system: 'ri:computer-line',
}

function toggleColorMode() {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  }
  else if (colorMode.preference === 'light') {
    colorMode.preference = 'system'
  }
  else {
    colorMode.preference = 'dark'
  }
}

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => colorMode.value === 'dark' ? '#1f2937' : '#f3f4f6',
  }],
})
</script>

<template>
  <ColorScheme tag="span">
    <template #placeholder>
      <Icon name="ri:loader-2-line" class="text-xl animate-spin" />
    </template>
    <button @click="toggleColorMode">
      <Icon :name="themeIcon[colorMode.preference as ColorModePreference]" class="text-xl cursor-pointer" />
    </button>
  </ColorScheme>
</template>
