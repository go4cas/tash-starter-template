import { terser } from 'rollup-plugin-terser'
import multiInput from 'rollup-plugin-multi-input'
import copy from 'rollup-plugin-copy-watch'
import del from 'rollup-plugin-delete'

export default {
  input: [
    'src/**/*.js'
  ],
  output: {
    dir: './dist',
    format: 'es'
  },
  // preserveModules: true,
  plugins: [
    del({
      taregts: 'dist/*'
    }),
    terser(),
    multiInput(),
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
        }
      ]
    })
  ]
}
