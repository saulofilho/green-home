<template>
  <div class="features">
    <p class="title container">
      Digital Nature
    </p>
    <div class="features-wrapper container">
      <div class="infos-wrapper">
        <p class="text">
          Com o Botanic Daily Data você consegue controlar individualmente cada plantação, tanto indoor quanto outdoor, de um jeito simples e tecnológico. 
        </p>
      </div>
    </div>
    <div class="carousel-wrapper">
      <VueSlickCarousel v-bind="settings">
        <div class="carousel-box">ansjdasdo a pkafcmwopa opcwakwopac poap wa</div>
        <div class="carousel-box">fjaiwf ia wf wpa kfaop ofak opaopw fpoaw</div>
        <div class="carousel-box">fioawfoa pafooa opawof kawop kopaw</div>
        <div class="carousel-box">kwdakjwd apkw doap wkdpao wpak</div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  props: {
    msg: String
  }
}
</script>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          arrows: false,
          dots: false,
          dotsClass: "slick-dots custom-dot-class",
          edgeFriction: 0.35,
          infinite: true,
          speed: 800,
          slidesToShow: 3,
          slidesToScroll: 1,
          focusOnSelect: true,
          swipeToSlide: true,
          centerMode: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .carousel-wrapper {
    margin: 0 auto;
    max-width: 1140px;
    padding: 20px 70px 0;
  }
  .carousel-box {
    background: #fff;
    cursor: pointer;
    padding: 60px 30px 0;
    width: auto;
    height: 300px;
    border: 2px solid #071a52;
  }
  .features {
    height: 100%;
    width: 100vw;
    background: #a7ff83;
    padding: 2rem;
  }
  .features-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
  }
  .title {
    font-family: 'Source Serif Pro', serif;
    font-size: 30px;
    font-weight: bolder;
    font-style: italic;
    line-height: 30px;
    text-align: center;
    padding-bottom: 30px;
  }
  .text {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
  }
  .infos-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  @media (max-width: 768px) {
    .features-wrapper {
      flex-flow: column;
    }
  }
</style>
