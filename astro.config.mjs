// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  server: { port: 3000 },
  output: 'static',
  adapter: vercel(),
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [react(), tailwind({ applyBaseStyles: false })]
})
