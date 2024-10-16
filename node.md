#node

## 安装pnpm

npm i pnpm -g

## eslint配置

- pnpm i eslint -D
- pnpm eslint --init
- 配置eslint.config.js文件, rules等
- packjson.json添加script命令 "lint": "eslint src" / "fix": "eslint src --fix"
- 检查是否生效

## prettier配置

- pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
- 测试是否有报错 pnpm run lint
- 配置.prettierrc.json文件
- 新增忽略文件 .prettierignore
- 更新packjson.json文件 script 添加 "format": "prettier . --write"
- 配置eslint.config.js文件 plugins
  - `plugins: { prettier: prettier },
{
    ignores: ['node_modules', 'dist', 'public', '.nuxt']
},
eslintConfigPrettier
`
- 配置vscode的 Default Formatter / format on save

## 配置stylelint

- 安装包
  `pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D`
- 新增配置文件 .stylelintrc.cjs
- 新增忽略文件 .stylelintignore
- 添加脚本 `"lint:style": "stylelint src/\*_/_.{css,scss,vue} --cache --fix"`

## 引入element-plus

- pnpm install element-plus @element-plus/icons-vue
- pnpm install -D unplugin-vue-components unplugin-auto-import
- 配置按需自动导入

```ts
  vite.config.ts 文件中

  import { defineConfig } from 'vite'
  // 以下三项引入是为配置Element-plus自动按需导入
  import AutoImport from 'unplugin-auto-import/vite'
  import Components from 'unplugin-vue-components/vite'
  import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

  export default defineConfig({
    // ...
    plugins: [
      // 以下两项是为配置Element-plus自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  })
```
