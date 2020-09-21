import '~/assets/style/index.scss'
import Buefy from 'buefy'
import DefaultLayout from '~/layouts/Default.vue'

import 'buefy/dist/buefy.css'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  Vue.component('Layout', DefaultLayout)
}
