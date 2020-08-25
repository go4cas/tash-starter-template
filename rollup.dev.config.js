import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy-watch'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: [
    './src/app.js'
  ],
  output: {
    dir: './dist',
    format: 'es'
  },
  preserveModules: true,
  plugins: [
    terser(),
    copy({
      watch: 'src',
      targets: [
        {
          src: 'src/index.html',
          dest: 'dist',
          transform: (contents) => contents.toString().replace('tailwind.output.css', 'tailwind.css')
        },
        {
          src: 'src/static/img/*',
          dest: 'dist/static/img/'
        },
        {
          src: 'src/static/fonts/*',
          dest: 'dist/static/fonts/'
        }
      ]
    }),
    livereload({
      watch: 'dist'
    }),
    serve({
      open: true,
      contentBase: 'dist'
    })
  ]
}
