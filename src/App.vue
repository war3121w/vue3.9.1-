<template>
  <div id="app">
    <h1 class="text-center">我是APP.vue</h1>
    <router-view></router-view>
  </div>
</template>

<script>
//import Index from './components/Index.vue'

export default {
  name: "app",
  components: {
    //Index
  }
};
</script>

<style>
#app {
  height: 100%;
}
</style>
