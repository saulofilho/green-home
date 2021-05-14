<template>
  <footer>
    <div class="footer-wrapper container">
      <img
        src="../assets/bdd-logo-new.png"
        alt="this is the logo of company, guys"
      />
    </div>
    <div class="footer-links-wrapper container">
      <div class="footer-col">
        <a href="#About">About</a>
        <a href="#Features">Features</a>
      </div>
      <div class="footer-col">
        <a href="#HowItWorks">How it works</a>
        <a href="#Signature">Price</a>
      </div>
      <div class="footer-col">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer"
          >Terms</a
        >
        <a href="http://google.com" target="_blank" rel="noopener noreferrer"
          >Policy</a
        >
      </div>
    </div>
    <div class="footer-line container"></div>
    <p class="footer-copy container">
      © 2021 Buena Vista Lab, Inc. All Rights Reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  height: 100%;
  width: 100%;
  background: #a7ff83;
  padding: 2rem 0;
}
.footer-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
}
.footer-links-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row;
  padding-top: 30px;
}
.footer-col {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  padding-right: 80px;
}
.footer-col a {
  font-family: 'Rubik', sans-serif;
  color: #000;
  font-size: 14px;
  line-height: 20px;
}
.footer-col a:hover {
  color: rgb(175, 230, 255);
}
.footer-wrapper img {
  width: 10%;
}
.footer-line {
  height: 30px;
  border-bottom: 1px solid rgb(209, 209, 209);
}
.footer-copy {
  font-size: 12px;
  color: gray;
  font-family: 'Source Serif Pro', serif;
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 768px) {
  .footer-wrapper img {
    width: 30%;
  }
  .footer-links-wrapper {
    flex-flow: column;
  }
  .footer-col {
    padding-right: unset;
  }
  .footer-col:last-child {
    padding-top: 30px;
  }
  .footer-line {
    width: 80%;
  }
  .footer-copy {
    justify-content: center;
  }
}
</style>
