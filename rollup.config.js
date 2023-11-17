import typescript from "rollup-plugin-typescript2"
import vue from 'rollup-plugin-vue'
import postcss from "rollup-plugin-postcss"
import del from "rollup-plugin-delete"
import copy from "rollup-plugin-copy"
import terser from "@rollup/plugin-terser"

export default [
  {
     input: 'packages/components/index.ts',
     output: {
      dir: 'dist/components',
      formate: 'esm'
     },
     external: ['vue'],
     plugins: [
      del({ targets: 'dist/components' }),
      vue({
        include: ['**/*.vue']
      }),
      typescript({
        tsconfig: 'tsconfig.app.json'
      }),
      terser(),
      copy({
        targets: [
          { src: 'packages/components/package.json', dest: 'dist/components' }
        ]
      })
     ]
  },
  {
    input: 'packages/theme-chalk/src/index.scss',
    output: {
      file: 'dist/theme-chalk/index.css',
      format: 'esm'
    },
    plugins: [
      del({ targets: 'dist/theme-chalk'}),
      postcss({
        extract: true,
        minimize: true
      }),
      copy({
        targets: [
          { src: 'packages/theme-chalk/package.json', dest: 'dist/theme-chalk' },
          { src: 'packages/theme-chalk/src/fonts/*', dest: 'dist/theme-chalk' }
        ]
      })
    ]
  }
]