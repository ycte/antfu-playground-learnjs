<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Starport } from 'vue-starport'
import KokomiState from '@/components/KokomiState.vue'
const a = ref(true)

</script>
<template>
  <div class="心海">
    <!-- <KokomiState :prop="a" /> -->
    <Starport port="kokomi" 
      style="height: 200px; margin-top: 120px; width: 200px; margin-left: 100px;"
    >
      <KokomiState :prop="a">
      </KokomiState>
    </Starport>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .心海 {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
