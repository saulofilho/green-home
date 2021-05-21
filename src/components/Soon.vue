<template>
  <div id="Soon" class="soon">
    <video src="../assets/soon.mp4" autoplay loop muted></video>
    <p>The next step: the device. Soon.</p>
  </div>
</template>

<script>
export default {
  name: 'Soon',
}
</script>

<style scoped>
.soon {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.soon p {
  position: absolute;
  font-family: 'Source Serif Pro', serif;
  font-size: 2rem;
  color: #fff;
  text-align: center;
}
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -9;
}

@media (max-width: 768px) {
  .soon-wrapper {
    height: unset;
    flex-flow: column;
  }
}
</style>
