<template>
  <div class="signature">
      <div class="signature-wrapper container">
        <h1>PayPall</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signature',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .signature {
    height: 100vh;
    width: 100%;
    background: rgb(175, 230, 255);
    padding: 2rem;
  }
  .signature-wrapper {
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
    .signature-wrapper {
      flex-flow: column;
    }
    .invert-column-mobile {
      flex-flow: column-reverse;
    }
  }
</style>
