import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gsap from 'gsap'

const app = createApp(App)

// Magnetic Directive
app.directive('magnetic', {
  mounted(el) {
    el.addEventListener('mousemove', (e) => {
      const position = el.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;

      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: 'power2.out'
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      })
    })
  }
})

app.use(router)

app.mount('#app')
