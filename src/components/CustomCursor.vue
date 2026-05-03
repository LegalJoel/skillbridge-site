<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const cursor = ref(null)

onMounted(() => {
  const moveCursor = (e) => {
    gsap.to(cursor.value, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.15,
      ease: 'power2.out'
    })
  }

  const hoverStart = () => {
    gsap.to(cursor.value, { scale: 2.5, backgroundColor: 'rgba(232, 169, 58, 0.1)', borderColor: 'var(--orange)', duration: 0.3 })
  }

  const hoverEnd = () => {
    gsap.to(cursor.value, { scale: 1, backgroundColor: 'transparent', borderColor: 'var(--black)', duration: 0.3 })
  }

  window.addEventListener('mousemove', moveCursor)

  // Attach hover events to clickable elements
  const addHoverEvents = () => {
    const interactables = document.querySelectorAll('a, button, input, textarea, select, .interactable')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', hoverStart)
      el.addEventListener('mouseleave', hoverEnd)
    })
  }

  // Initial attachment and setup mutation observer to handle dynamic elements
  addHoverEvents()

  const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) shouldUpdate = true
    })
    if (shouldUpdate) addHoverEvents()
  })

  observer.observe(document.body, { childList: true, subtree: true })

  onUnmounted(() => {
    window.removeEventListener('mousemove', moveCursor)
    observer.disconnect()
  })
})
</script>

<template>
  <div ref="cursor" class="custom-cursor"></div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 1.5px solid var(--black);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  mix-blend-mode: multiply;
}

@media (max-width: 768px) {
  .custom-cursor {
    display: none; /* Hide on mobile to avoid touching issues */
  }
}
</style>
