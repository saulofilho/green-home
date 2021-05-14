<template>
  <div id="HowItWorks" class="howItWorks">
    <p class="title container">Simply simple, my friend.</p>
    <div class="features-wrapper container">
      <div class="infos-wrapper">
        <p class="text align-center">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/bdd1.gif" alt="" />
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
        <img src="../assets/bdd2.gif" alt="" />
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
        <img src="../assets/bdd3.gif" alt="" />
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
        <img src="../assets/bdd4.gif" alt="" />
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
        <img src="../assets/bdd5.gif" alt="" />
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
        <img src="../assets/bdd6.gif" alt="" />
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
.text.align-center {
  text-align: center;
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
  padding: 10px 10px 10px 0;
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
  .text {
    padding-bottom: 30px;
  }
}
</style>
