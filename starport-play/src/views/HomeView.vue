<script setup lang="ts">
import { isRef, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Starport } from 'vue-starport'
import KokomiState from '@/components/KokomiState.vue'
const a = ref(true)
const kokomiref = ref({})
let foo: unknown
// console.log(isRef(foo))
// console.log(isRef(kokomiref))
// if (isRef(foo)) {
//   // foo 的类型被收窄为了 Ref<unknown>
//   console.log(foo.value)
// }
onMounted(() => {
  
})

</script>
<template>
  <div class="珊瑚宫">
    <!-- <KokomiState ref="kokomiref" :prop="a"/> -->
    <Starport port="kokomi" style="height: 200px; width: 200px;font-size: larger;">
      <KokomiState :prop="a" ref="kokomiref">
      </KokomiState >  
    </Starport>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .珊瑚宫 {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
