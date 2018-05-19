<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="title">Welcome</h1>
        <h2 class="subtitle">
          I am a Full Stack Developer from Saint Paul, MN currently working at US Internet in the 
          Twin Cities.
        </h2>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-1x1">
                  <img src="../assets/pic.jpeg" alt="Placeholder image">
                </figure>
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
  data: function () {
    return {}
  }
}
</script>

<style lang="scss">

.card-content {
  background-color: $secondary;
}

</style>
