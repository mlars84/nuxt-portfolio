<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="title is-italic">Welcome</h1>
        <h2 class="subtitle has-text-grey">
          I am a Full Stack Developer from Saint Paul, MN currently working at US Internet in the 
          Twin Cities.
        </h2>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="image is-1x1">
                  <img src="../assets/pic.jpeg" alt="Placeholder image">
                </p>
              </div>
              <div class="media-content">
                <p class="title is-4 has-text-grey">Matt Larson</p>
                <p class="subtitle is-6 has-text-grey">@mlars84</p>
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
