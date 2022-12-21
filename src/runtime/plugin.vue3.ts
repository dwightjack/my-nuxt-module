import { defineNuxtPlugin } from '#app'
import { MyClass} from './my-class'

export default defineNuxtPlugin((nuxtApp) => {
  console.log((new MyClass()).getMessage())
})
