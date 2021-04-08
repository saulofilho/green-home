<template>
  <header>
    <div class="header-wrapper container">
      <div class="links-wrapper">
        <a href="#About">About</a>
      </div>
      <img src="../assets/bdd-logo-new-w.png" alt="this is the logo of company, guys">
      <div class="links-wrapper">
        <a href="#Features">Features</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    width: 100%;
    position: fixed;
    z-index: 999;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
    padding-top: 2rem;
  }
  @media (max-width: 768px) {
    .header-wrapper img {
      width: 50%;
    }
  }
</style>
