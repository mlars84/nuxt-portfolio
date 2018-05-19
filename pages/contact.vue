<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <aside class="menu">
            <p class="menu-label">
              Say hello
            </p>
            <ul>
              <li><ion-icon name="text"></ion-icon><a class="has-text-grey is-pulled-left" href="tel:1-612-251-6818">612.251.6818</a></li>
              <li><ion-icon name="mail"></ion-icon><a class="has-text-grey is-pulled-left" href="mailto:matt.a.larson@gmail.com">matt.a.larson@gmail.com</a></li>
              <li><ion-icon name="git-branch"></ion-icon><a class="has-text-grey is-pulled-left" href="https://github.com/mlars84">@mlars84</a></li>
              <li><ion-icon name="share-alt"></ion-icon><a class="has-text-grey is-pulled-left" href="https://twitter.com/mattlarsonmusic">@mattlarsonmusic</a></li>
              <li><ion-icon name="create"></ion-icon><a class="has-text-grey is-pulled-left" href="https://medium.com/@mlars84">Medium</a></li>
            </ul>
          </aside>
      </div>
    </div>
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

li {
  list-style: none;
  
}

.card-content {
  background-color: $secondary;
}

</style>
