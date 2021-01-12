<template>
  <div class="hero">
    <div class="videowrapper">
      <iframe 
        src="https://player.vimeo.com/video/1205130?autoplay=1&loop=1&title=0&byline=0&portrait=0" 
        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
        frameborder="0" 
        allow="autoplay; fullscreen" 
        allowfullscreen
      >
      </iframe>
    </div>
    <div class="hero-wrapper container">
      <h2>Botanic Daily Data.</h2>
      <h1>Acompanhe o crescimento da sua plantação com dados reais.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero {
    width: 100%;
    height: 600px;
  }
  .videowrapper {
    float: none;
    clear: both;
    width: 100%;
    
    padding-bottom: 56.2%;
    height: 0;
    
    /* Put the video in the background */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
  .hero-wrapper {
    height: 100%;
    color: #a7ff83;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    margin: 0 auto;
  }
  h1 {
    font-family: 'Source Serif Pro', serif;
    font-size: 36px;
    font-weight: bolder;
  }
  h2 {
    font-family: 'Source Serif Pro', serif;
    font-size: 18px;
    font-weight: lighter;
  }
</style>
