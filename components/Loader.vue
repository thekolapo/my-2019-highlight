<template>
  <div
    v-if="loadingAssets"
    class="loader"
  >
    <div class="summary">
      With the hours, days and months gone by,
      I take a moment to reflect on the highlights
      and happenings of 2019.
    </div>
    <div class="img-container">
      <div id="loader-text">
        {{ loaderCounter }}%
      </div>
      <img src="@/assets/images/loader.png" alt="loader-img">
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */

let that = null

export default {
  data () {
    return {
      loadingAssets: true,
      loaderCounter: 0
    }
  },
  mounted () {
    that = this
    this.preloadImages()
  },
  methods: {
    preloadImages () {
      const images = []
      const imgNames = [
        'wall-of-pictures.jpg',
        'boat-2.jpg',
        'building-rome.jpg',
        'chisom.jpg',
        'cup.jpg',
        'dominos.jpg',
        'food-barcelona.jpg',
        'gbems.jpg',
        'gelato.jpg',
        'hendricks-gin.jpg',
        'iniye.jpg',
        'kachi-ilashe.jpg',
        'kolapo-ilashe.jpg',
        'kolapo-lisbon.jpg',
        'lara.jpg',
        'light.jpg',
        'tomiwa.jpg',
        'vintage-car.jpg'
      ]

      imgNames.forEach((imgSrc) => {
        const img = new Image()
        img.src = require(`@/assets/images/${imgSrc}`)
        images.push(img)
      })

      imagesLoaded(images).on(
        'progress', function (instance, image) {
          that.loaderCounter += 5
          // document.getElementById('loader-text').innerHTML = instance.progressedCount * 5;

          if (that.loaderCounter === 90) {
            that.loaderCounter = 100
            // document.getElementById('loader-text').innerHTML = 100;
          }

          if (that.loaderCounter === 100) {
            window.scrollTo(0, 0)
            new TimelineLite().to(
              '.loader', 0.66,
              {
                opacity: 0,
                ease: Power2.easeIn,
                delay: 1,
                onComplete () {
                  that.loadingAssets = false
                }
              }
            )
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/sass/loader";
</style>
