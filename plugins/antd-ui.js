
import Antd from 'ant-design-vue'
import * as Icons from "@ant-design/icons-vue";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd).use(Icons)
})
