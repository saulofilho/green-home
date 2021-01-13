<template>
  <header>
    <div class="header-wrapper container">
      <div class="links-wrapper">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">About</a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">Etc</a>
      </div>
      <img src="../assets/bdd-logo.png" alt="this is the logo of company, guys">
      <div class="links-wrapper">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">xxx</a>
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
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
    padding-top: 2rem;
  }
</style>
