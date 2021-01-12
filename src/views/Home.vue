<template>
  <div>
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    About
  }
}
</script>