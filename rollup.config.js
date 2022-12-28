import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'index.es.js',
        format: 'es',
        exports: 'named'
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
      }),
      external(),
      resolve(),
      typescript(),
      svgr({ exportType: 'named', jsxRuntime: 'automatic' }),
      url(),
    ]
  }
]
