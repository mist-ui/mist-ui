import { fileURLToPath } from 'url'
import { defineConfig } from '@mist-design/cli'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  logLevel: 'info',
  vite: {
    build: {
      minify: false,
    },
    plugins: [
      DefineOptions(),
    ],
  },
  ui: {
    name: 'MistUI',
    root: './packages/mist-ui',
    globals: {
      'classnames': 'classNames',
      '@mist-design/icons': 'MistIcons',
      '@mistjs/lodash': '_',
    },
    style: {
      include: ['src/**/*.less'],
    },
    template: {
      site: {
        root: './site',
        compDocDir: 'src/pages/components',
      },
    },
  },
  icons: {
    root: './packages/icons',
    name: 'MistIcons',
    build: {
      // 配置生成图标的目录
      generateDir: 'src',
      // 配置根据那个库生成图标，默认是ant-design
      library: 'ant-design',
    },
  },
  eslint: {
    // 配置格式化的文件
    overrideConfigFile: fileURLToPath(new URL('./.eslintrc', import.meta.url)),
    // 配置忽略文件
    ignorePath: fileURLToPath(new URL('./.eslintignore', import.meta.url)),
  },
})
