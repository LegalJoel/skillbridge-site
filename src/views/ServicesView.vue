<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.page-hero h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from('.page-hero p', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })

  gsap.from('.insight-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.insights-grid',
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
                <h1 class="h1">Our Skilled Trade Services</h1>
                <p>Every worker is background-checked, safety-certified, and dispatched with a quality guarantee.</p>

            </div>
        </section>

        <!-- Services Detail Cards using insights-grid style -->
        <section class="section">
            <div class="container">
                <div class="insights-grid">
                    
                    <!-- Electrical -->
                    <div class="insight-card">
                        <div class="insight-img-wrapper" style="height: 200px;">
                            <img src="/assets/hero_worker_1.png" alt="Electrical Work" style="object-position: top;">
                            <div class="insight-dot"></div>
                        </div>
                        <div class="insight-content">
                            <div class="date" style="color: var(--orange);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>&nbsp;Electrical Work</div>
                            <h3>Residential, Commercial & Solar Installations</h3>
                            <p class="text-silver text-sm" style="margin-bottom: 16px; line-height: 1.5;">New wiring and rewiring, circuit breaker repair, power socket installation, generator connections, and electrical fault diagnosis.</p>
                            <div class="author">
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Residential</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Commercial</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px;">Solar</span>
                            </div>
                        </div>
                    </div>

                    <!-- Plumbing -->
                    <div class="insight-card">
                        <div class="insight-img-wrapper" style="height: 200px;">
                            <img src="/assets/bento_tools.png" alt="Plumbing">
                            <div class="insight-dot"></div>
                        </div>
                        <div class="insight-content">
                            <div class="date" style="color: var(--orange);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" /></svg>&nbsp;Plumbing</div>
                            <h3>Pipe Installation, Repair & Water Tank Servicing</h3>
                            <p class="text-silver text-sm" style="margin-bottom: 16px; line-height: 1.5;">Water pipe installation, bathroom fitting, borehole pump installation, leak detection, and water meter installation.</p>
                            <div class="author">
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Leak Repairs</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Tank & Pump</span>
                            </div>
                        </div>
                    </div>

                    <!-- Masonry -->
                    <div class="insight-card">
                        <div class="insight-img-wrapper" style="height: 200px;">
                            <img src="/assets/bento_construction.png" alt="Masonry">
                            <div class="insight-dot"></div>
                        </div>
                        <div class="insight-content">
                            <div class="date" style="color: var(--orange);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" /></svg>&nbsp;Masonry & Construction</div>
                            <h3>Building, Renovation & Civil Construction</h3>
                            <p class="text-silver text-sm" style="margin-bottom: 16px; line-height: 1.5;">Block laying, concrete casting, floor and wall tiling, plastering, foundation work, and drainage channels.</p>
                            <div class="author">
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Foundations</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Tiling</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px;">Plastering</span>
                            </div>
                        </div>
                    </div>

                    <!-- Welding -->
                    <div class="insight-card">
                        <div class="insight-content" style="padding-top: 32px;">
                            <div class="date" style="color: var(--orange);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>&nbsp;Welding & Fabrication</div>
                            <h3>Security Gates & Construction Steel</h3>
                            <p class="text-silver text-sm" style="margin-bottom: 16px; line-height: 1.5;">Security gates, burglar bars, fence fabrication, roof truss work, custom metal furniture, and structural steel repairs.</p>
                            <div class="author">
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Security Works</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px;">Custom Fabrication</span>
                            </div>
                        </div>
                    </div>

                    <!-- Carpentry -->
                    <div class="insight-card">
                        <div class="insight-content" style="padding-top: 32px;">
                            <div class="date" style="color: var(--orange);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>&nbsp;Carpentry & Woodwork</div>
                            <h3>Furniture & Interior Fit-Outs</h3>
                            <p class="text-silver text-sm" style="margin-bottom: 16px; line-height: 1.5;">Custom furniture making, door/window frame installation, ceilings, kitchen cabinets, and office partitioning.</p>
                            <div class="author">
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">Custom Furniture</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px;">Renovations</span>
                            </div>
                        </div>
                    </div>

                    <!-- General Repairs -->
                    <div class="insight-card">
                        <div class="insight-content" style="padding-top: 32px;">
                            <div class="date" style="color: var(--orange);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" /></svg>&nbsp;General Repairs</div>
                            <h3>Flexible Handyman Services</h3>
                            <p class="text-silver text-sm" style="margin-bottom: 16px; line-height: 1.5;">AC servicing, painting (interior/exterior), appliance repairs, roof repairs, and general home maintenance.</p>
                            <div class="author">
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px;">AC Service</span>
                                <span style="background: var(--gray-bg); padding: 4px 8px; border-radius: 4px; font-size: 12px;">Painting</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Safety Certification Section -->
        <section class="section" style="background-color: var(--black); color: var(--white);">
            <div class="container text-center">
                <h2 class="h2 mb-4" style="color: var(--white);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>&nbsp;OHS Safety Certification</h2>
                <p class="text-md text-silver" style="max-width: 800px; margin: 0 auto 40px; line-height: 1.6;">Every SkillBridge worker completes a 3.5-hour occupational health and safety workshop before being dispatched to any client. Our curriculum is aligned with Liberia's OHS Regulation No. 19 and ILO international standards.</p>
                
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 48px;">
                    <div style="background: rgba(255,255,255,0.1); padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>&nbsp;PPE & Personal Safety</div>
                    <div style="background: rgba(255,255,255,0.1); padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>&nbsp;Electrical Safety</div>
                    <div style="background: rgba(255,255,255,0.1); padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>&nbsp;Fire & Burn Prevention</div>
                    <div style="background: rgba(255,255,255,0.1); padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>&nbsp;Site Hazard Awareness</div>
                    <div style="background: rgba(255,255,255,0.1); padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>&nbsp;Basic First Aid</div>
                </div>

                <router-link to="/register#worker" class="btn-primary" v-magnetic style="background-color: var(--blue);">
                    Join Our Certified Network
                    <span class="icon-circle" style="color: var(--blue);">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </router-link>
            </div>
        </section>

        <!-- B2B Section -->
        <section class="section" style="background-color: var(--gray-bg);">
            <div class="container">
                <div class="text-center mb-4">
                    <h2 class="h2">B2B & Project-Based Services</h2>
                    <p class="section-subtitle" style="margin: 0 auto 64px;">Construction companies, NGOs, and government agencies — we can supply your workforce</p>
                </div>

                <div class="team-grid">
                    <div class="team-card" style="background: var(--white); text-align: center;">
                        <div class="team-avatar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg></div>
                        <h3 style="font-size: 18px; margin-bottom: 8px;">On-Demand Workforce</h3>
                        <p class="text-silver text-sm" style="line-height: 1.5;">Request workers as needed for your project. Flexible, no long-term commitment required.</p>
                    </div>
                    <div class="team-card" style="background: var(--white); text-align: center;">
                        <div class="team-avatar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg></div>
                        <h3 style="font-size: 18px; margin-bottom: 8px;">Monthly Retainer</h3>
                        <p class="text-silver text-sm" style="line-height: 1.5;">Secure a dedicated pool of workers on monthly contract. Priority dispatch, fixed pricing.</p>
                    </div>
                    <div class="team-card" style="background: var(--white); text-align: center;">
                        <div class="team-avatar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg></div>
                        <h3 style="font-size: 18px; margin-bottom: 8px;">Project Deployment</h3>
                        <p class="text-silver text-sm" style="line-height: 1.5;">We supply and manage workers for the duration of your project. Invoicing and compliance included.</p>
                    </div>
                    <div class="team-card" style="background: var(--white); text-align: center;">
                        <div class="team-avatar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg></div>
                        <h3 style="font-size: 18px; margin-bottom: 8px;">Local Compliance</h3>
                        <p class="text-silver text-sm" style="line-height: 1.5;">We help you meet Liberia's local content law requirements for skilled Liberian labour on your projects.</p>
                    </div>
                </div>

                <div class="text-center" style="margin-top: 48px;">
                    <router-link to="/contact" class="btn-primary" v-magnetic style="background-color: var(--black); color: white;">
                        Contact Us for a Custom Quote
                    </router-link>
                </div>
            </div>
        </section>

    </main>
</template>
