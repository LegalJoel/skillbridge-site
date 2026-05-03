<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('.ty-wrap > *', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  })
})
</script>

<template>
  <main class="container ty-container">
    <div class="ty-wrap">
      <div class="ty-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 80px; height: 80px; color: var(--blue);">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 class="h1 text-gradient">Submission Received!</h1>
      <p class="text-silver text-lg" style="max-width: 600px; margin: 0 auto 32px;">
        Thank you! Our team will review your information and contact you on WhatsApp or phone within <strong>2–48 hours</strong>.
      </p>
      <p class="text-sm mb-4">Need urgent help? WhatsApp us directly at <strong>+231 889 305 016</strong></p>
      
      <div class="ty-actions">
        <router-link to="/" class="btn-primary" style="background-color: var(--black);" v-magnetic>← Back to Home</router-link>
        <a href="https://wa.me/231889305016" target="_blank" class="btn-primary" style="background-color: var(--teal);" v-magnetic>WhatsApp Us Now</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.ty-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ty-wrap {
  text-align: center;
  padding: 40px 20px;
}
.ty-icon {
  margin-bottom: 24px;
}
.ty-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
}
</style>
