<template>
  <div class="about" id="About">
    <p class="title container">
      Harvesting data? What?!
    </p>
    <div class="about-wrapper container">
      <div class="infos-wrapper">
        <p class="text">
          O Botanic Daily Data é um aplicativo que ajuda você a precaver erros e
          pensar em soluções para problemas na sua plantação, com dados reais do
          seu projeto.
        </p>
      </div>
      <div class="ilustration-wrapper">
        <img src="../assets/teste.png" alt="">
      </div>
    </div>
    <div class="about-wrapper container invert-column-mobile">
      <div class="ilustration-wrapper">
        <img src="../assets/teste.png" alt="">
      </div>
      <div class="infos-wrapper">
        <p class="text">
          O Botanic Daily Data é um aplicativo que ajuda você a precaver erros e
          pensar em soluções para problemas na sua plantação, com dados reais do
          seu projeto.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
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
    width: 300px;
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
  }
</style>
