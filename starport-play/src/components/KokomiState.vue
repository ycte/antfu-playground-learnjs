<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['prop'])
const a = ref(0)
defineExpose({ a })
</script>

<template>
  <div class="心海厨">
    <h1>kokomi</h1>
    <slot></slot>
  </div>
</template>

<style scoped>
.心海厨 {
  
}


</style>