<template>
    <div class="main">
        <footer class="footer is-paddingless">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                    &copy; 2018 -  Matt Larson 
                    </p>
                </div>
            </div>
        </footer>
    </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    overflow:hidden;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
      .footer {}
}
</style>


