<template>
  <div id="app">
    <div id="container">
      <app-head></app-head>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: 'App',
  components:{
    appHead:Header
  }
}
</script>

<style>

</style>
