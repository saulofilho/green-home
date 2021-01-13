<template>
  <div class="about">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about {
    height: 100%;
    width: 100vw;
    background: #a7ff83;
    padding: 2rem;
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
  @media (max-width: 768px) {
    .about-wrapper {
      flex-flow: column;
    }
  }
</style>
