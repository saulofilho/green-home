<template>
  <div id="Features" class="features">
    <p class="title container">Digital Nature</p>
    <div class="features-wrapper container">
      <div class="infos-wrapper">
        <p class="text align-center">
          Everything that you need will be with you. With all these features,
          you can improve your havest everyday aim nice plants or even comples
          ecosystem, like mushroom's family.
        </p>
      </div>
    </div>
    <div class="carousel-wrapper">
      <VueSlickCarousel v-bind="settings">
        <div class="carousel-box">
          <strong>Any device.</strong>
          Input your data in any device: watch, mobile, tablet, desktop, car...
        </div>
        <div class="carousel-box">
          <strong>It's a simple app.</strong>
          Simple to use. Simple to fill the data.
        </div>
        <div class="carousel-box">
          <strong>No more plants killer.</strong>
          With the data, you can predict what happen to your harvest just
          looking the past data.
        </div>
        <div class="carousel-box">
          <strong>No more plants killer.</strong>
          With the data, you can predict what happen to your harvest just
          looking the past data.
        </div>
        <div class="carousel-box">
          <strong>Look the data.</strong>
          Compare the data from another harvest that you have to see what
          happened, improving your skills and your harvests.
        </div>
        <div class="carousel-box">
          <strong>Table tha matters.</strong>
          Spreadsheet is nice, but could be confuse and take a lot of errors.
          The Botanic Daily Data helps you to organize and displayed all your
          dataset.
        </div>
        <div class="carousel-box">
          <strong>I S2 Spreadsheet!</strong>
          No problem. You could save your data in Excel or CVS.
        </div>
        <div class="carousel-box">
          <strong>Only you can provide the data.</strong>
          Anyone have access to your data.
        </div>
        <div class="carousel-box">
          <strong>Security always is important.</strong>
          We don't take your cookies. Your data doesn't matter to us.
        </div>
        <div class="carousel-box">
          <strong>Made by friends.</strong>
          We are humans. So, sometimes we have some bad days and release some
          bugs. If you see something like that, drop us a line telling it
          happened: hi@buenavistala.com
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
}
</script>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        dotsClass: 'slick-dots custom-dot-class',
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
            },
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
.features {
  height: 100%;
  width: 100%;
  background: #a7ff83;
  padding: 2rem 0;
}
.carousel-wrapper {
  margin: 0 auto;
  padding: 50px 0 0;
  height: 100%;
  width: 100%;
}
.carousel-box {
  background: #fff;
  cursor: pointer;
  padding: 30px;
  width: 100%;
  height: 100%;
  border: 2px solid #071a52;
  font-family: 'Source Serif Pro', serif;
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
.text.align-center {
  text-align: center;
  padding-bottom: 20px;
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
