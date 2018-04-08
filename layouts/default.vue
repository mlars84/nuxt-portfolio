<template>
  <div class="main">
    <NavBar />
    <nuxt/>
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

</style>
