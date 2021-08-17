<template>
  <div id="About" class="about">
    <p class="title container">Harvesting data? What?!</p>
    <div class="features-wrapper container">
      <div class="infos-wrapper">
        <p class="text align-center">
          The Botanic Daily Data is a simple and frindely database for your
          harvests. You need just fill every day the data input to store and
          create a database.
        </p>
      </div>
    </div>
    <div class="about-wrapper container">
      <div class="infos-wrapper">
        <p class="text align-right">
          You can track all the life of your plant, since the seeding to
          harvesting.
        </p>
      </div>
      <div class="ilustration-wrapper">
        <img src="../assets/about1.png" alt="illustration man" />
      </div>
    </div>
    <div class="about-wrapper container invert-column-mobile">
      <div class="ilustration-wrapper">
        <img src="../assets/about2.png" alt="illustration woman" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          Collect and store the data in a simple database with graphs and
          analystics to see how it goes the harvesting.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  height: 100%;
  width: 100%;
  background: #a7ff83;
  padding: 2rem 0;
}
.about-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
}
.text {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}
.text.align-center {
  text-align: center;
  padding-bottom: 20px;
}
.text.align-right {
  text-align: right;
  padding-bottom: 20px;
}
.infos-wrapper,
.ilustration-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.ilustration-wrapper img {
  max-width: 100%;
  padding: 20px;
  /* width: 300px; */
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
@media (max-width: 768px) {
  .about-wrapper {
    flex-flow: column;
  }
  .invert-column-mobile {
    flex-flow: column-reverse;
  }
  .ilustration-wrapper img {
    max-width: 100%;
    padding: 10px 0 30px;
    /* width: 300px; */
  }
}
</style>
