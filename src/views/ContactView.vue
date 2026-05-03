<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.page-hero h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from('.page-hero p', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })

  gsap.from('.contact-grid > div', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact-grid',
      start: 'top 85%'
    }
  })
})
</script>

<template>
    <main>
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <h1 class="h1">Contact Us</h1>
                <p>We respond within 2 hours. WhatsApp is the fastest way to reach us.</p>

            </div>
        </section>

        <!-- Contact Split Layout -->
        <section class="section">
            <div class="container">
                <div class="contact-grid">
                    
                    <!-- Left: Contact Info -->
                    <div>
                        <h2 class="h2 mb-4">Get In Touch</h2>
                        <p class="text-silver mb-4" style="font-size: 18px; max-width: 400px; line-height: 1.6;">Whether you're a homeowner who needs work done, a tradesperson looking to join, or a company interested in partnership — we're here to help.</p>

                        <div style="margin-top: 40px; display: grid; gap: 32px;">
                            <div style="display: flex; gap: 16px; align-items: flex-start;">
                                <div style="font-size: 24px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.216-3.916-6.812-6.812l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></div>
                                <div>
                                    <h4 style="font-size: 16px; margin-bottom: 4px;">Phone / WhatsApp</h4>
                                    <a href="tel:+231889305016" style="color: var(--blue); text-decoration: none; font-size: 18px; font-weight: 500;">+231 889 305 016</a>
                                    <div class="text-silver text-sm" style="margin-top: 4px;">Mon – Sat, 8:00 AM – 6:00 PM</div>
                                </div>
                            </div>

                            <div style="display: flex; gap: 16px; align-items: flex-start;">
                                <div style="font-size: 24px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div>
                                <div>
                                    <h4 style="font-size: 16px; margin-bottom: 4px;">Email</h4>
                                    <a href="mailto:info@skillbridgeliberia.com" style="color: var(--blue); text-decoration: none; font-size: 18px; font-weight: 500;">info@skillbridgeliberia.com</a>
                                    <div class="text-silver text-sm" style="margin-top: 4px;">Response within 24 hours</div>
                                </div>
                            </div>

                            <div style="display: flex; gap: 16px; align-items: flex-start;">
                                <div style="font-size: 24px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg></div>
                                <div>
                                    <h4 style="font-size: 16px; margin-bottom: 4px;">Office Location</h4>
                                    <p style="color: var(--black); font-size: 18px; font-weight: 500; margin: 0; line-height: 1.4;">Methodist Compound Premises<br>Monrovia, Liberia</p>
                                </div>
                            </div>
                        </div>

                        <!-- WhatsApp Block -->
                        <div style="margin-top: 48px; background: var(--teal); padding: 32px; border-radius: 20px; text-align: center;">
                            <div style="font-size: 40px; margin-bottom: 16px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg></div>
                            <h3 style="color: var(--white); margin-bottom: 8px;">Fastest Response</h3>
                            <p style="color: rgba(255,255,255,0.7); margin-bottom: 24px; font-size: 14px;">Most clients get a response in under 30 minutes.</p>
                            <a href="https://wa.me/231889305016" class="btn-primary" v-magnetic style="background: var(--white); color: var(--teal); border: none; width: 100%; justify-content: center;">Open WhatsApp</a>
                        </div>
                    </div>

                    <!-- Right: Contact Form -->
                    <div>
                        <div class="form-wrap">
                            <h3 style="font-size: 24px; margin-bottom: 8px;">Send Us a Message</h3>
                            <p class="text-silver text-sm mb-4">Fill in the form and we'll get back to you within 2 business hours.</p>
                            
                            <form name="contact-form" method="POST" data-netlify="true" action="/thank-you">
                                <input type="hidden" name="form-name" value="contact-form" />
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Full Name *</label>
                                        <input type="text" name="name" required placeholder="Your full name">
                                    </div>
                                    <div class="form-group">
                                        <label>Phone / WhatsApp *</label>
                                        <input type="tel" name="phone" required placeholder="+231...">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="your@email.com">
                                </div>
                                <div class="form-group">
                                    <label>I am a *</label>
                                    <select name="type" required>
                                        <option value="">Select...</option>
                                        <option>Homeowner / Individual Client</option>
                                        <option>Business / Company</option>
                                        <option>Skilled Worker</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Subject *</label>
                                    <select name="subject" required>
                                        <option value="">Select...</option>
                                        <option>I want to hire a worker</option>
                                        <option>I want to register as a worker</option>
                                        <option>General information</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Message *</label>
                                    <textarea name="message" required placeholder="Tell us exactly how we can help you..."></textarea>
                                </div>
                                <button type="submit" class="btn-primary" v-magnetic style="width: 100%; justify-content: center;">Send Message&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle; margin-left: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg></button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Global Offices Section / Map -->
        <section class="offices-section container" style="padding-top: 0;">
            <div class="offices-header">
                <span class="text-silver text-md">Our Location</span>
                <h2 class="h2">Find Us in Monrovia</h2>
            </div>

            <div style="width: 100%; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.05); height: 500px;">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20295.011273201115!2d-10.740119515475843!3d6.271603031589556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa19cc9330980c25%3A0xb5af0c4b2fcd8158!2sSkillBridge%20Liberia!5e0!3m2!1sen!2s!4v1777839103892!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="section" style="background-color: var(--gray-bg);">
            <div class="container">
                <div class="text-center mb-4">
                    <h2 class="h2">Frequently Asked Questions</h2>
                    <p class="section-subtitle" style="margin: 0 auto 64px;">Quick answers to what clients and workers ask us most</p>
                </div>

                <div class="team-grid" style="max-width: 1000px; margin: 0 auto;">
                    <div class="team-card" style="background: var(--white); border-top: 4px solid var(--blue);">
                        <h4 style="font-size: 18px; margin-bottom: 12px;">How quickly can you send a worker?</h4>
                        <p class="text-silver text-sm" style="line-height: 1.6;">We respond within 2 hours of your request and dispatch a worker within 24 hours. For emergencies, we prioritise same-day dispatch.</p>
                    </div>
                    <div class="team-card" style="background: var(--white); border-top: 4px solid var(--orange);">
                        <h4 style="font-size: 18px; margin-bottom: 12px;">How do I pay?</h4>
                        <p class="text-silver text-sm" style="line-height: 1.6;">You pay the worker directly. SkillBridge charges a 10–15% coordination fee on the job value, payable via mobile money.</p>
                    </div>
                    <div class="team-card" style="background: var(--white); border-top: 4px solid var(--blue);">
                        <h4 style="font-size: 18px; margin-bottom: 12px;">What if I'm not happy with the work?</h4>
                        <p class="text-silver text-sm" style="line-height: 1.6;">We have a Quality Replacement Guarantee. If you're not satisfied, we'll send a replacement worker at no additional cost.</p>
                    </div>
                    <div class="team-card" style="background: var(--white); border-top: 4px solid var(--orange);">
                        <h4 style="font-size: 18px; margin-bottom: 12px;">How do I register as a worker?</h4>
                        <p class="text-silver text-sm" style="line-height: 1.6;">Fill out the worker registration form on our Register page. We'll verify your references and invite you to safety training.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>
