<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { StarportCarrier } from 'vue-starport'
import 'animate.css'
// import HelloWorld from './components/HelloWorld.vue'
// onMounted(() => {
//   console.log(window.document)
// }),

// console.log(window)
</script>

<template>
  <!-- <RouterView /> -->
  <!-- // TODO: go-on starport -->
  <StarportCarrier>
    <!-- <RouterView v-slot="{ Component }" class="router-view-container ">
      <transition name="fade-kokomi" >
      <component
            class="animate__animated animate__fadeIn"
            :is="Component"
          />
      </transition>
    </RouterView> -->
    <RouterView class="router-view-container animate__animated animate__fadeIn" />
  </StarportCarrier>
</template>

<style scoped>
[data-starport-craft] {
  background: #0805;
}

[data-starport-proxy]:not([data-starport-landed]) {
  background: #8005;
}

.router-view-container {
  width: 520px;
  height: 520px;
}

/* .fade-kokomi-leave-active {
  transition: opacity 0.3s ease;
}

.fade-kokomi-leave-to {
  opacity: 0;
} */


header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
