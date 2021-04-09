<template>
  <div>
    <Header />
    <Hero />
    <About />
    <Features />
    <Signature />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Features from '../components/Features.vue'
import Signature from '../components/Signature.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    About,
    Features,
    Signature,
    Footer
  }
}
</script>
