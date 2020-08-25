import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy-watch'
import del from 'rollup-plugin-delete'

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
    del({
      targets: 'dist/*'
    }),
    terser(),
    copy({
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
    })
  ]
}
