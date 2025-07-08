<script setup lang="ts">
const { locales, setLocale, locale } = useI18n()
let index = locales.value.findIndex(item => item.code === locale.value)
function toggleLoacles() {
  if (index >= locales.value.length - 1) {
    index = 0
  }
  else {
    index++
  }
  setLocale(locales.value[index]!.code)
}

const i18nHead = useLocaleHead()
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}))
</script>

<template>
  <button class="cursor-pointer" @click="toggleLoacles">
    <Icon name="ri:translate" class="text-xl" />
  </button>
</template>
