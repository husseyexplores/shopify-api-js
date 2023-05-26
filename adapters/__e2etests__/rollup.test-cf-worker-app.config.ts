import swc from 'rollup-plugin-swc';
import nodeResolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import {RollupOptions} from 'rollup';

const config: RollupOptions = {
  input: 'adapters/__e2etests__/test_apps/test-cf-worker-app.js',
  output: {
    dir: 'bundle',
    format: 'esm',
  },
  plugins: [
    nodeResolve({
      extensions: ['.ts', '.js'],
      browser: true,
    }),
    cjs(),
    swc({
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target: 'es2022',
      },
    }),
  ],
};
export default config;
