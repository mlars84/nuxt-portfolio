<template>
    <div class="main">
        <footer class="navbar is-paddingless is-fixed-bottom">
            <p class="navbar-item">&copy; {{ currentYear }} -  Matt Larson</p> 
            <p class="navbar-item">This site built with Nuxt, Bulma, Sass and deployed via AWS-cli.</p>
        </footer>
    </div>  
</template>

<script>
import moment from 'moment'

export default {
  name: 'Footer',

  data () {
      return {}
  },

  computed: {
      currentYear () {
          return moment().format('Y')
      }
  }
}
</script>

<style lang="scss" scoped>
.navbar-item {
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  color: $dark;
}
</style>


