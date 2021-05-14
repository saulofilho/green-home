<template>
  <div id="Signature" class="signature">
    <p class="title container">We have to pay the server.</p>
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
    <div class="signature-wrapper container">
      <div class="price-wrapper">
        <p class="price-tag">R$ 9,99</p>
        <p class="price-about">Something about US$ 1.89.</p>
      </div>
      <div class="btn-sign-wrapper">
        <a
          mp-mode="dftl"
          href="https://www.mercadopago.com/mlb/debits/new?preapproval_plan_id=2c93808478efe20f0178f05385c50035"
          name="MP-payButton"
          class="blue-ar-l-rn-none"
          >Subscribe.</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signature',
}
</script>

<style scoped>
.signature {
  height: 100vh;
  width: 100%;
  background: rgb(175, 230, 255);
  padding: 2rem 0;
}
.signature-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  padding-top: 10%;
}
.btn-sign-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn-sign-wrapper a {
  font-family: 'Rubik', sans-serif;
  margin-top: 20px;
  padding: 10px 20px;
  background: rgb(0, 102, 170);
  border-radius: 5px;
  color: #fff;
}
.btn-sign-wrapper a:hover {
  font-family: 'Rubik', sans-serif;
  background: #a7ff83;
  color: #000;
}
.price-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
}
.price-tag {
  font-family: 'Source Serif Pro', serif;
  font-size: 5rem;
}
.price-about {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  padding-bottom: 20px;
}
.paypal-btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 100%;
  height: 100%;
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
  .signature-wrapper {
    height: unset;
    flex-flow: column;
  }
  .invert-column-mobile {
    flex-flow: column-reverse;
  }
  .price-wrapper,
  .paypal-btn-wrapper {
    height: unset;
  }
  .price-tag {
    font-size: 2rem;
  }
  .price-wrapper {
    padding: 20px 0;
  }
}
</style>
