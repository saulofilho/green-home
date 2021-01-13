<template>
  <div id="app">
    <!-- <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link> -->
    <router-view></router-view>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a7ff83;
  }
  ::selection {
    background: #071a52;
    color: #17b978;
  }
  .container {
    margin: 0px auto;
    padding: 0 30px;
    max-width: 900px;
  }
  .slick-slide {
    margin-right: 20px;
  }
  @media (max-width: 768px) {

  }
</style>
