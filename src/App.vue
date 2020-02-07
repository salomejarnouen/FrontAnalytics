<template>
  <div id="app">
    <div id="nav">
      <router-link to="/userAnalytics">UserAnalytics</router-link>
    </div>
    <router-view :userAnalyticsMsg="msg"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to our app'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
