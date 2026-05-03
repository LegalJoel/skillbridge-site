<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CustomCursor from './components/CustomCursor.vue'

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis;

onMounted(() => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>

<template>
  <CustomCursor />
  <Navbar />
  
  <RouterView />

  <Footer />
</template>
