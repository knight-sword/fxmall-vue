<template>
  <div id="app">
    <div style="width: 100%;height:120px;background-color: #fff;">
      <img src="./assets/123.jpg">
    </div>
    <router-view class="main"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 20px;*/
  height: 100%;
  width: 100%;
  background-size: cover;
}

</style>
