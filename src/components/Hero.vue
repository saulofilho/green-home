<template>
  <div class="hero">
    <video
      src="../assets/hero-video-bg.mp4"
      autoplay
      loop
      playsinline
      muted
    ></video>
    <div class="hero-wrapper container">
      <h1>
        Create your own database to make better decisions about your harvest by
        tracking and analysing data input.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9;
}
.hero-wrapper {
  height: 100%;
  color: #a7ff83;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
}
h1 {
  font-family: 'Source Serif Pro', serif;
  font-size: 36px;
  line-height: 34px;
  font-weight: bolder;
  text-align: center;
}
@media (max-width: 768px) {
  h1 {
    font-size: 24px;
    line-height: 22px;
  }
}
</style>
