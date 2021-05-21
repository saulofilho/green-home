<template>
  <div>
    <Header />
    <Hero />
    <About />
    <Features />
    <HowItWorks />
    <Signature />
    <Soon />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Features from '../components/Features.vue'
import HowItWorks from '../components/HowItWorks.vue'
import Signature from '../components/Signature.vue'
import Soon from '../components/Soon.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    About,
    Features,
    HowItWorks,
    Signature,
    Soon,
    Footer,
  },
}
</script>
