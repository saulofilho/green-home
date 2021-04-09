<template>
  <div id="HowItWorks" class="howItWorks">
    <p class="title container">Simply simple, my friend.</p>
    <div class="features-wrapper container">
      <div class="infos-wrapper">
        <p class="text">
          Com o Botanic Daily Data você consegue controlar individualmente cada
          plantação, tanto indoor quanto outdoor, de um jeito simples e
          tecnológico.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/teste.png" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          O Botanic Daily Data é um aplicativo que ajuda você a precaver erros e
          pensar em soluções para problemas na sua plantação, com dados reais do
          seu projeto.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/teste.png" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          O Botanic Daily Data é um aplicativo que ajuda você a precaver erros e
          pensar em soluções para problemas na sua plantação, com dados reais do
          seu projeto.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/teste.png" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          O Botanic Daily Data é um aplicativo que ajuda você a precaver erros e
          pensar em soluções para problemas na sua plantação, com dados reais do
          seu projeto.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/teste.png" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          O Botanic Daily Data é um aplicativo que ajuda você a precaver erros e
          pensar em soluções para problemas na sua plantação, com dados reais do
          seu projeto.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/teste.png" alt="" />
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
  name: 'HowItWorks',
}
</script>

<style scoped>
.howItWorks {
  height: 100%;
  width: 100%;
  background: #a7ff83;
  padding: 2rem 0;
}
.howItWorks-wrapper {
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
  .howItWorks-wrapper {
    flex-flow: column;
  }
  .invert-column-mobile {
    flex-flow: column-reverse;
  }
}
</style>
