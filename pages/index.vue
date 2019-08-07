<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="title is-italic">Welcome</h1>
        <h2 class="subtitle">
          Certified Full Stack Software Engineer from Saint Paul, MN -- currently on the USI Dev team at US Internet in the 
          Twin Cities.
        </h2>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="image is-1x1">
                  <img src="../assets/headshot.png" alt="Placeholder image">
                </p>
              </div>
              <div class="media-content">
                <p class="title is-4">Matt Larson</p>
                <p class="subtitle is-6">@mlars84</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'index',

  data () {
    return {}
  }
}
</script>

<style lang="scss">

.card-content {
  background-color: $secondary;
}

</style>
