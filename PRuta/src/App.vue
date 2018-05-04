<template>
  <div id="app">

    <b-img :src="require('./assets/prutaLogo.png')" fluid alt="PRuta" /> 
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
// import Language from './components/Language'

export default {
  name: 'app',
  components: {
    NavBar
 //   Language
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
