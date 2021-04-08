<template>
  <footer>
    <div class="footer-wrapper container">
      <img src="../assets/bdd-logo-new-w.png" alt="this is the logo of company, guys">
      <div class="links-wrapper container">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">Termos</a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">Pensar</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    height: 100%;
    width: 100%;
    background: #a7ff83;
    padding: 2rem 0;
  }
  .footer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    padding-top: 2rem;
  }
  .footer-wrapper img {
    width: 10%;
  }
  @media (max-width: 768px) {
    .footer-wrapper img {
      width: 30%;
    }
  }
</style>
