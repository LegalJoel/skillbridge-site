<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Hero animations
  const tl = gsap.timeline()
  tl.from('.hero-content .h1', { y: 100, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 })
    .from('.hero-action', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .from('.hero-bg-left img', { x: -50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
    .from('.hero-bg-right img', { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1')

  // Parallax for hero images
  gsap.to('.hero-bg-left img', {
    y: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  gsap.to('.hero-bg-right img', {
    y: 150,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  // Fade up sections
  gsap.utils.toArray('section').forEach(section => {
    if(section.classList.contains('hero')) return; // Skip hero
    gsap.from(section, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      }
    })
  })

  // Stagger Bento Grid
  gsap.from('.bento-item', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.bento-grid',
      start: 'top 85%'
    }
  })
})
</script>

<template>
    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-bg-left">
                <img src="/assets/hero_worker_1.png" alt="Electrician" style="border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            </div>
            <div class="hero-bg-right">
                <img src="/assets/hero_worker_2.png" alt="Construction Worker" style="border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            </div>
            <div class="container hero-content">
                <h1 class="h1">
                    Connecting <span class="text-gradient">Skilled<br>Workers</span> to<br><span class="text-stroke" style="-webkit-text-stroke: 1px var(--black);">Opportunity.</span>
                </h1>
                <div class="hero-action">
                    <router-link to="/register#hire" class="btn-primary" v-magnetic>
                        Hire a Skilled Worker
                        <span class="icon-circle">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </router-link>
                </div>
            </div>
            <!-- Lines under the button -->
            <div class="hero-lines">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section class="promise-section container">
            <div class="section-header text-center">
                <span class="text-silver text-md">How It Works</span>
                <h2 class="h2">Simple, fast, and transparent<br>whether you're hiring<br>or looking for work.</h2>
            </div>

            <div class="promise-content">
                <div class="promise-tabs">
                    <div class="tab active">
                        <span class="tab-num">01.</span>
                        <span class="tab-title">Contact Us</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                    <div class="tab">
                        <span class="tab-num">02</span>
                        <span class="tab-title">We Match You</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                    <div class="tab">
                        <span class="tab-num">03</span>
                        <span class="tab-title">Worker Arrives</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                    <div class="tab">
                        <span class="tab-num">04</span>
                        <span class="tab-title">Job Done & Pay</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>

                <div class="promise-panel">
                    <p class="text-silver text-md mb-4">We identify the right verified, safety-trained tradesperson from our network within 2 hours. Your assigned worker arrives with a SkillBridge ID card, proper PPE, and full professionalism.</p>
                    
                    <div class="search-form">
                        <div class="form-group">
                            <label>Service Needed</label>
                            <select>
                                <option>Electrical Work</option>
                                <option>Plumbing</option>
                                <option>Welding</option>
                                <option>Carpentry</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Location</label>
                            <select><option>Monrovia</option><option>Paynesville</option></select>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label>Contact Phone</label>
                            <input type="text" placeholder="+231...">
                        </div>
                        <button class="btn-dark" style="grid-column: 1 / -1;" @click="$router.push('/register#hire')">Request Worker Now</button>
                    </div>

                    <router-link to="/register#worker" class="btn-primary mt-4" style="background-color: var(--blue);">
                        Join as a Worker Instead
                        <span class="icon-circle" style="color: var(--blue);">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- About Us Section -->
        <section class="about-section container">
            <div class="about-header">
                <div class="title">
                    <span>Why Choose Us</span>
                    <h2 class="h2">Verified, Trained,<br>and Guaranteed</h2>
                    <router-link to="/services" class="btn-primary mt-4">
                        View Services
                        <span class="icon-circle">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </router-link>
                </div>
                <div class="desc">
                    <p>Every worker is background-checked, safety-trained, and performance-guaranteed across Monrovia and beyond.</p>
                </div>
            </div>

            <div class="bento-grid">
                <div class="bento-item bento-1 bento-gradient">
                    <div class="bento-content">
                        <div class="number">100+</div>
                        <div class="label">Vetted Workers</div>
                    </div>
                    <img src="/assets/bento_construction.png" alt="Construction Site" style="opacity: 0.3; mix-blend-mode: overlay;">
                    <router-link to="/about" class="arrow-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                    </router-link>
                </div>
                <div class="bento-item bento-2">
                    <img src="/assets/bento_tools.png" alt="Tools">
                    <div class="bento-content">
                        <div class="number">6</div>
                        <div class="label">Trade Categories</div>
                    </div>
                    <router-link to="/services" class="arrow-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                    </router-link>
                </div>
                <div class="bento-item bento-3">
                    <img src="/assets/bento_terminal.png" alt="Dispatch">
                    <div class="bento-content">
                        <div class="number">24h</div>
                        <div class="label">Dispatch Guarantee</div>
                    </div>
                    <router-link to="/contact" class="arrow-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                    </router-link>
                </div>
                <div class="bento-item bento-4">
                    <img src="/assets/hero_worker_1.png" alt="OHS Certified">
                    <div class="bento-content">
                        <div class="number">OHS</div>
                        <div class="label">Regulation Compliant</div>
                    </div>
                    <router-link to="/services" class="arrow-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Our Services Section -->
        <section class="insights-section container">
            <div class="insights-header">
                <div class="title">
                    <span class="text-silver text-md">Our Services</span>
                    <h2 class="h2" style="font-size: 48px;">Professional Trades<br>for Every Need</h2>
                </div>
                <div class="desc" style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end;">
                    <p class="text-silver mb-4">Every worker is background-checked,<br>safety-trained, and performance-<br>guaranteed.</p>
                    <router-link to="/services" class="btn-primary" v-magnetic style="padding: 12px 24px;">
                        View All Services
                        <span class="icon-circle" style="width: 20px; height: 20px;">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </router-link>
                </div>
            </div>

            <div class="insights-grid">
                <div class="insight-card">
                    <div class="insight-img-wrapper">
                        <img src="/assets/hero_worker_1.png" alt="Electrical Work">
                        <div class="insight-dot"></div>
                    </div>
                    <div class="insight-content">
                        <div class="date">Availability: 24/7 Dispatch</div>
                        <h3>Electrical Work, Wiring &<br>Solar Installations</h3>
                        <div class="author">Status: <strong>Licensed & Insured</strong></div>
                    </div>
                </div>
                
                <div class="insight-card">
                    <div class="insight-img-wrapper">
                        <img src="/assets/bento_tools.png" alt="Plumbing">
                        <div class="insight-dot"></div>
                    </div>
                    <div class="insight-content">
                        <div class="date">Availability: Same-Day Available</div>
                        <h3>Plumbing, Pipe Installation<br>& Water Tank Servicing</h3>
                        <div class="author">Status: <strong>OHS Certified</strong></div>
                    </div>
                </div>

                <div class="insight-large">
                    <img src="/assets/bento_construction.png" alt="Masonry">
                    <div class="overlay">
                        <div class="plus-icon">+</div>
                        <h3>Need General<br>Repairs or Builders?</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Global Offices Section -->
        <section class="offices-section container">
            <div class="offices-header">
                <span class="text-silver text-md">Our Network</span>
                <h2 class="h2">Explore Our Footprint<br>in Liberia</h2>
                <router-link to="/contact" class="btn-primary mt-4">
                    Find an office
                    <span class="icon-circle">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </router-link>
            </div>

            <div class="offices-map">
                <div style="position: relative; display: block;">
                    <img src="/assets/liberia_map_bg.png" alt="Liberia Map" class="map-bg">
                    
                    <div class="map-pin pin-1">
                        <div class="pin-label">Methodist Compound Premises<br>Monrovia, Liberia</div>
                        <div class="pin-dot"></div>
                    </div>
                </div>


                <!-- Overlapping Bento Card -->
                <div class="offices-bento-overlay">
                    <div class="bento-item bento-1 bento-gradient" style="height: 100%;">
                        <div class="bento-content text-left" style="text-align: left;">
                            <div class="number">87%</div>
                            <div class="label">Informal Workforce Transitioned</div>
                        </div>
                        <img src="/assets/bento_construction.png" alt="Construction" style="opacity: 0.5; mix-blend-mode: overlay;">
                        <router-link to="/about" class="arrow-btn" style="position: absolute; bottom: 24px; right: 24px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Registration CTA Section -->
        <section class="careers-section container">
            <div class="careers-content">
                <div class="careers-text">
                    <span class="text-silver text-md mb-4" style="display:block;">Join the Network</span>
                    <h2 class="h2 mb-4">Tired of<br>Unreliable<br>Income?</h2>
                    <router-link to="/register#worker" class="btn-primary mb-4" style="background-color: var(--blue);">
                        Register as a Tradesperson
                        <span class="icon-circle" style="color: var(--blue);">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </router-link>
                    
                    <div class="careers-features">
                        <div class="feature">
                            <h4 style="font-size: 18px; font-weight: 500; margin-bottom: 8px;">Get Jobs & Get Paid</h4>
                            <p class="text-silver text-md">Jobs come straight to you.</p>
                        </div>
                        <div style="flex: 1;">
                            <p class="text-silver text-md">We handle client sourcing so you can focus on the work. Receive job dispatch via WhatsApp, serve clients, build your reputation, and earn more.</p>
                        </div>
                    </div>
                </div>
                <div class="careers-image">
                    <img src="/assets/hero_worker_1.png" alt="Happy Tradesperson">
                </div>
            </div>
        </section>

        <!-- Testimonial Section -->
        <section class="testimonial-section container text-center">
            <div class="testimonial-quote-mark">&ldquo;</div>
            <h2 class="testimonial-quote">
                "Before SkillBridge, I was looking for work every single day. Now jobs come to me. My income doubled in two months."
            </h2>
            <p class="testimonial-author text-md text-silver mb-4">Emmanuel K. <strong>Electrician, Sinkor</strong></p>
            
            <div class="testimonial-images">
                <img src="/assets/hero_worker_1.png" style="width: 200px; height: 260px; object-fit: cover; border-radius: 16px;">
                <img src="/assets/hero_worker_2.png" style="width: 200px; height: 260px; object-fit: cover; border-radius: 16px; transform: translateY(-20px);">
                <img src="/assets/bento_construction.png" style="width: 200px; height: 260px; object-fit: cover; border-radius: 16px;">
            </div>

            <!-- CTA Section -->
            <div class="cta-section">
                <h2 class="h2 mb-4">Ready to Get Started?</h2>
                <router-link to="/register#hire" class="btn-primary" v-magnetic>
                    Hire a Worker Today
                    <span class="icon-circle">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </router-link>
            </div>
        </section>
    </main>
</template>
