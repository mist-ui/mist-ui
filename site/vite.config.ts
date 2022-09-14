import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { presetAttributify, presetIcons, presetTypography, presetUno } from 'unocss'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { MistDesignVitePluginDocs } from '@mist-design/plugin-docs'
import { mdToVue } from '@mist-design/plugin-md'
const mistPath = fileURLToPath(new URL('../packages/mist-ui/src', import.meta.url))
export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src/', import.meta.url)),
      'mist-ui': mistPath,
      'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-browser.js',
    },
  },
  plugins: [
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
        presetTypography(),
      ],
    }),
    mdToVue({
      markdown: {
        theme: {
          light: 'vitesse-light',
          dark: 'vitesse-dark',
        },
      },
    }),
    MistDesignVitePluginDocs({
      glob: `${mistPath}/**/demos/**/*.vue`,
      base: mistPath,
      markdown: {
        theme: {
          light: 'vitesse-light',
          dark: 'vitesse-dark',
        },
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/core',
      ],
      dirs: ['src/composables'],
      dts: 'types/auto-import.d.ts',
    }),
    Components({
      extensions: ['vue'],
      dirs: [
        'src/components',
        'src/layouts',
      ],
      include: [
        /\.vue$/,
        /\.vue?vue/,
      ],
      dts: 'types/components.d.ts',
    }),
    DefineOptions(),
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    vueJsx(),
    Inspect(),
  ],
})
