<template>
  <div id="Signature" class="signature">
    <p class="title container">We have to pay the server.</p>
    <div class="features-wrapper container">
      <div class="infos-wrapper">
        <p class="text">
          Com o Botanic Daily Data você consegue controlar individualmente cada
          plantação, tanto indoor quanto outdoor, de um jeito simples e
          tecnológico.
        </p>
      </div>
    </div>
    <div class="signature-wrapper container">
      <div class="price-wrapper">
        <p class="price-about">
          Com o Botanic Daily Data você consegue controlar individualmente cada
          plantação, tanto indoor quanto outdoor, de um jeito simples e
          tecnológico.
        </p>
        <p class="price-tag">$ 2,99</p>
      </div>
      <div class="cho-container">button</div>
    </div>
  </div>
</template>

<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
export default {
  name: 'Signature',
  mounted() {
    // Adicione as credenciais do SDK
    const mp = new MercadoPago('TEST-0a1f3a2a-75d5-4a80-a788-58c7fe14e40a', {
      locale: 'pt-BR',
    })

    // Inicialize o checkout
    mp.checkout({
      preference: {
        id: '151289502-01361f46-0699-49e5-a6a5-39ccf93630f3',
      },
      render: {
        container: '.cho-container', // Indica onde o botão de pagamento será exibido
        label: 'Pagar', // Muda o texto do botão de pagamento (opcional)
      },
    })
  },
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
  flex-flow: row;
  width: 100%;
  height: 100%;
}
.price-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
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
