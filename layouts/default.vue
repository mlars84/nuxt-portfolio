<template>
    <div class="body">
        <NavBar />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default {
  components: {
    NavBar, 
    Footer
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="scss">
html {
  font-family: $family-primary;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
