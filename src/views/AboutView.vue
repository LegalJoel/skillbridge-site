<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TeamMember from '../components/TeamMember.vue'

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: 'Joel J. Barclay',
    role: 'Founder & CEO',
    image: '/assets/members/Joel_Barclay_FOUNDER&CEO.png'
  },
  {
    name: 'Lorpu Faith Scott',
    role: 'Board Chairperson',
    image: '/assets/members/LorpuFaithScott_BoardChairperson.png'
  },
  {
    name: 'Jeremiah Kesselly',
    role: 'General Manager',
    image: '/assets/members/Jeremiah_Kesselly_GENERALMANAGER.png'
  },
  {
    name: 'Kelvin Zammie',
    role: 'Chief Technology Officer',
    image: '/assets/members/Kelvin_Zammie_CTO.png'
  },
  {
    name: 'Eunice C. Diggs',
    role: 'M&E Lead',
    image: '/assets/members/Eunice_C_Diggs_M&E_LEAD.png'
  },
  {
    name: 'Ericia David',
    role: 'Social Media Manager',
    image: '/assets/members/Ericia_David_SOCIALMEDIAMANAGER.png'
  },
  {
    name: 'Nehemiah Kemayah',
    role: 'Head of Corporate Partnerships & Business Development',
    image: '/assets/members/Nehemiah_Kemayah_HeadCorporatePartnerships&BusinessDevelopment.png'
  }
]

onMounted(() => {
  gsap.from('.page-hero h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from('.page-hero p', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })

  // Fade up sections
  gsap.utils.toArray('.about-content-section, .values-grid .value-card, .team-grid .team-card').forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      }
    })
  })
})
</script>

<template>
    <main>
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <h1 class="h1">About SkillBridge Liberia</h1>
                <p>We exist to transform how skilled workers connect with opportunity in Liberia — professionally, safely, and sustainably.</p>

            </div>
        </section>

        <!-- Our Story -->
        <section class="section">
            <div class="container">
                <div class="story-grid">
                    <div>
                        <span class="text-silver text-md" style="display:block; margin-bottom:16px;">Our Story</span>
                        <h2 class="h2 mb-4">Fixing the Gap in Liberia's Trade Network</h2>
                        <p class="text-md text-silver" style="margin-bottom: 24px; line-height: 1.6;">SkillBridge Liberia was born from a simple observation: Liberia is full of talented, hard-working tradespeople — electricians, plumbers, welders, carpenters, masons — who have the skills but lack the platform, the clients, and the professional framework to thrive.</p>
                        <p class="text-md text-silver" style="margin-bottom: 24px; line-height: 1.6;">At the same time, homeowners, businesses, and construction companies are desperately searching for reliable, trustworthy workers and repeatedly getting burned by no-shows, shoddy work, and zero accountability.</p>
                        <p class="text-md text-silver" style="line-height: 1.6;">We built SkillBridge Liberia to fix both sides of that problem — by creating a verified, safety-trained, professionally managed network of skilled workers who are dispatched directly to clients who need them.</p>
                    </div>
                    
                    <div>
                        <!-- Mission / Vision Cards -->
                        <div class="form-wrap" style="background: var(--teal); color: var(--white); margin-bottom: 24px;">
                            <h3 style="font-size: 24px; margin-bottom: 16px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>&nbsp;Our Mission</h3>
                            <p style="color: rgba(255,255,255,0.8); line-height: 1.6;">To organise, empower, and professionally develop Liberia's skilled trades workforce by providing registration, safety training, and job placement services.</p>
                        </div>
                        <div class="form-wrap" style="background: var(--gray-bg); margin-bottom: 24px;">
                            <h3 style="font-size: 24px; margin-bottom: 16px; color: var(--black);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>&nbsp;Our Vision</h3>
                            <p class="text-silver" style="line-height: 1.6;">A Liberia where every skilled tradesperson has dignified, consistent work — and every client has access to reliable, certified, professional service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- By the Numbers (Bento) -->
        <section class="section" style="background-color: var(--black); color: var(--white);">
            <div class="container">
                <div class="text-center mb-4">
                    <span class="text-silver text-md" style="display:block; margin-bottom:16px;">Scale</span>
                    <h2 class="h2" style="color: var(--white);">SkillBridge by the Numbers</h2>
                </div>
                
                <div class="bento-grid" style="margin-top: 64px;">
                    <div class="bento-item bento-1 bento-gradient">
                        <div class="bento-content text-left" style="text-align: left;">
                            <div class="number">100+</div>
                            <div class="label">Workers Registered</div>
                        </div>
                        <img src="/assets/bento_construction.png" alt="Workers" style="opacity: 0.5; mix-blend-mode: overlay;">
                    </div>

                    <div class="bento-item bento-2" style="background-color: var(--teal);">
                        <div class="bento-content">
                            <div class="number" style="color: var(--white);">6</div>
                            <div class="label" style="color: rgba(255,255,255,0.7);">Trade Categories</div>
                        </div>
                    </div>

                    <div class="bento-item bento-3" style="background-color: var(--white);">
                        <div class="bento-content">
                            <div class="number" style="color: var(--black);">24h</div>
                            <div class="label" style="color: var(--silver-gray);">Dispatch Guarantee</div>
                        </div>
                    </div>

                    <div class="bento-item bento-4" style="background-color: var(--orange);">
                        <div class="bento-content text-left" style="text-align: left;">
                            <h3 style="font-size: 24px; margin-bottom: 8px; color: var(--white);">Proudly Liberian</h3>
                            <p style="color: rgba(255,255,255,0.9); font-size: 14px;">Registered, TIN-certified, and committed to supporting Liberian workers and communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Leadership Team -->
        <section class="section" id="team">
            <div class="container">
                <h2 class="section-title">Our Leadership</h2>
                <p class="section-subtitle">Experienced professionals committed to transforming Liberia's skilled workforce</p>
                
                <div class="team-grid">
                    <TeamMember 
                        v-for="member in teamMembers" 
                        :key="member.name"
                        v-bind="member"
                    />
                </div>
            </div>
        </section>

        <!-- Core Values -->
        <section class="section" id="values" style="background-color: var(--gray-bg);">
            <div class="container">
                <h2 class="section-title">Our Core Values</h2>
                <p class="section-subtitle">These principles guide everything we do at SkillBridge Liberia</p>
                
                <div class="values-grid">
                    <div class="value-card" style="background: var(--white);">
                        <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px;">Safety First</h3>
                        <p class="text-silver text-sm" style="line-height: 1.6;">No job is worth injury. Every worker we dispatch is trained, certified, and equipped to work safely.</p>
                    </div>
                    <div class="value-card" style="background: var(--white);">
                        <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px;">Integrity</h3>
                        <p class="text-silver text-sm" style="line-height: 1.6;">Transparent pricing, honest dealings, and accountability from workers and management alike.</p>
                    </div>
                    <div class="value-card" style="background: var(--white);">
                        <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px;">Empowerment</h3>
                        <p class="text-silver text-sm" style="line-height: 1.6;">We don't just find jobs — we build careers, grow confidence, and elevate the status of trades work.</p>
                    </div>
                    <div class="value-card" style="background: var(--white);">
                        <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px;">Community</h3>
                        <p class="text-silver text-sm" style="line-height: 1.6;">SkillBridge exists to keep Liberian money in Liberian hands and build a stronger local economy.</p>
                    </div>
                    <div class="value-card" style="background: var(--white);">
                        <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px;">Quality</h3>
                        <p class="text-silver text-sm" style="line-height: 1.6;">We guarantee our work. If a client isn't satisfied, we fix it — no arguments, no excuses.</p>
                    </div>
                    <div class="value-card" style="background: var(--white);">
                        <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px;">Growth</h3>
                        <p class="text-silver text-sm" style="line-height: 1.6;">Continuous improvement in training, systems, and reach — from Monrovia to all 15 counties and beyond.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section cta-section text-center">
            <div class="container">
                <h2 class="h2 mb-4">Be Part of the Movement</h2>
                <p class="text-md text-silver" style="max-width: 600px; margin: 0 auto 40px;">Whether you're a skilled worker looking for steady income, or a client who needs reliable service — SkillBridge Liberia is your answer.</p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <router-link to="/register#hire" class="btn-primary" v-magnetic>
                        Hire a Worker
                        <span class="icon-circle">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </router-link>
                    <router-link to="/register#worker" class="btn-primary" v-magnetic style="background-color: var(--blue);">
                        Join Our Network
                        <span class="icon-circle" style="color: var(--blue);">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </router-link>
                </div>
            </div>
        </section>
    </main>
</template>
