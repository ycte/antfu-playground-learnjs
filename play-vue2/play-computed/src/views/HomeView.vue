<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>{{ getMsg(params) }}</div>
    <button @click="this.setMsg">msg</button>
    <button @click="this.setHhh">hhh</button>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      params: 'hhh'
    }
  },
  computed: {
    getMsg() {
      return function aaa(params) {
        // return params == 'msg' ? this.msg : 'hhh'
        // return window.localStorage.getItem('msg')
        this.msg = window.localStorage.getItem('msg')
        return this.msg
      }
    }
  },
  methods: {
    setMsg() {
      // console.log(this.params)
      // this.params = 'msg'
      window.localStorage.setItem('msg', this.msg)
      console.log(window.localStorage.getItem('msg'))
    },
    setHhh() {
      // console.log(this.params)
      // this.params = 'hhh'
      window.localStorage.setItem('msg', 'hhh')
      console.log(window.localStorage.getItem('msg'))
    }
  },
  mounted() {
    window.localStorage.setItem('msg', this.msg)
  }
}
</script>
