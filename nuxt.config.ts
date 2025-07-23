// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        // { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'GTemplate for Nuxt4' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#f3f4f6' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#1f2937' },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      esbuildOptions: {

      },
    },
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    clientBundle: {
      icons: [
        'ri:sun-line',
        'ri:computer-line',
        'ri:moon-line',
      ],
      // scan all components in the project and include icons
      scan: true,

      // include all custom collections in the client bundle
      includeCustomCollections: true,

      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
  },
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    strategy: 'no_prefix',
    // strategy: 'prefix',
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'zh',
    locales: [
      { code: 'en', name: 'English', file: 'en.yaml', language: 'en-US' },
      { code: 'zh', name: 'Chinese', file: 'zh_CN.yaml', language: 'zh-CN' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  eslint: {
    config: {
      standalone: false, // <---
    },
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], // 粗细
      styles: ['normal', 'italic'],
      subsets: ['cyrillic-ext', 'cyrillic', 'greek-ext', 'greek', 'vietnamese', 'latin-ext', 'latin'],
    },
  },
})
