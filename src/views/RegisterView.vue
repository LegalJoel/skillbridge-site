<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const activeTab = ref('hire')

const setActiveTab = (tab) => {
    activeTab.value = tab
}

onMounted(() => {
    if (route.hash === '#hire') {
        activeTab.value = 'hire'
    } else if (route.hash === '#worker') {
        activeTab.value = 'worker'
    }

    gsap.from('.page-hero h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
    gsap.from('.page-hero p', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
    gsap.from('.register-tabs', { y: 30, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' })

    gsap.from('.form-container', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.form-container',
            start: 'top 85%'
        }
    })
})

watch(() => route.hash, (newHash) => {
    if (newHash === '#hire') {
        activeTab.value = 'hire'
    } else if (newHash === '#worker') {
        activeTab.value = 'worker'
    }
})
</script>

<template>
    <main>
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <h1 class="h1">Register With SkillBridge</h1>
                <p>Join as a skilled worker or request a tradesperson for your home or business — all in one place.</p>

            </div>
        </section>

        <!-- Registration Section -->
        <section class="section" style="background-color: var(--gray-bg);">
            <div class="container" style="max-width: 800px; margin: 0 auto;">
                
                <!-- Tabs -->
                <div class="register-tabs">
                    <div class="register-tab" :class="{ active: activeTab === 'worker' }" @click="setActiveTab('worker')"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>&nbsp;I'm a Tradesperson</div>
                    <div class="register-tab" :class="{ active: activeTab === 'hire' }" @click="setActiveTab('hire')"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>&nbsp;I Need a Worker</div>
                </div>

                <!-- Worker Panel -->
                <div v-if="activeTab === 'worker'" class="register-panel active">
                    <div class="form-wrap">
                        <h3 class="mb-4" style="font-size: 24px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>&nbsp;Worker Registration Form</h3>
                        <p class="text-silver mb-4">Join Liberia's most trusted skilled trades network. Fill out the form below and our team will contact you within 48 hours.</p>
                        
                        <div style="background: rgba(37, 99, 255, 0.1); color: var(--blue); padding: 16px; border-radius: 12px; margin-bottom: 32px; font-size: 14px; font-weight: 500;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>&nbsp;Registration fee: $5–10 one-time | Monthly dues: $3–5 (payable via Orange Money / MTN Mobile Money)
                        </div>

                        <form name="worker-registration" method="POST" data-netlify="true" action="/thank-you">
                            <input type="hidden" name="form-name" value="worker-registration" />
                            <h4 style="font-size: 18px; margin-bottom: 16px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 8px;">Personal Information</h4>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Full Name *</label>
                                    <input type="text" name="fullname" required placeholder="Your full legal name">
                                </div>
                                <div class="form-group">
                                    <label>Date of Birth *</label>
                                    <input type="date" name="dob" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Phone / WhatsApp *</label>
                                    <input type="tel" name="phone" required placeholder="+231...">
                                </div>
                                <div class="form-group">
                                    <label>Email (optional)</label>
                                    <input type="email" name="email" placeholder="your@email.com">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Home Address / Neighborhood *</label>
                                <input type="text" name="address" required placeholder="e.g. Sinkor, Monrovia">
                            </div>

                            <h4 style="font-size: 18px; margin: 32px 0 16px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 8px;">Trade Information</h4>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Primary Trade *</label>
                                    <select name="trade" required>
                                        <option value="">Select your trade...</option>
                                        <option>Electrician</option>
                                        <option>Plumber</option>
                                        <option>Welder / Fabricator</option>
                                        <option>Carpenter</option>
                                        <option>Mason / Bricklayer</option>
                                        <option>General Repair / Handyman</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Years of Experience *</label>
                                    <select name="experience" required>
                                        <option value="">Select...</option>
                                        <option>1–2 years</option>
                                        <option>3–5 years</option>
                                        <option>6–10 years</option>
                                        <option>10+ years</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Do you have your own tools? *</label>
                                <select name="tools" required>
                                    <option value="">Select...</option>
                                    <option>Yes – full set</option>
                                    <option>Yes – basic tools only</option>
                                    <option>No – I need tools provided</option>
                                </select>
                            </div>

                            <h4 style="font-size: 18px; margin: 32px 0 16px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 8px;">Declaration</h4>
                            <p class="text-silver text-sm mb-4">By submitting this form, I confirm that all information provided is accurate and truthful. I agree to comply with the SkillBridge Liberia Code of Conduct and attend required safety training.</p>
                            
                            <div class="form-group" style="flex-direction: row; align-items: center; gap: 12px; margin-bottom: 32px;">
                                <input type="checkbox" name="agree" required style="width: auto;">
                                <label style="margin: 0; color: var(--black);">I agree to the terms and conditions *</label>
                            </div>

                            <button type="submit" class="btn-primary" v-magnetic style="width: 100%; justify-content: center; background-color: var(--blue);">Submit Registration&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></button>
                        </form>
                    </div>
                </div>

                <!-- Hire Panel -->
                <div v-if="activeTab === 'hire'" class="register-panel active">
                    <div class="form-wrap">
                        <h3 class="mb-4" style="font-size: 24px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>&nbsp;Request a Skilled Worker</h3>
                        <p class="text-silver mb-4">Tell us what you need and where, and we'll match you with the right verified worker within 2 hours.</p>
                        
                        <div style="background: rgba(232, 169, 58, 0.1); color: var(--orange); padding: 16px; border-radius: 12px; margin-bottom: 32px; font-size: 14px; font-weight: 500;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" /></svg>&nbsp;Service is free to request. You pay the worker directly at market rates. A small coordination fee (10–15%) applies.
                        </div>

                        <form name="client-request" method="POST" data-netlify="true" action="/thank-you">
                            <input type="hidden" name="form-name" value="client-request" />
                            <h4 style="font-size: 18px; margin-bottom: 16px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 8px;">Your Information</h4>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Full Name *</label>
                                    <input type="text" name="client_name" required placeholder="Your full name">
                                </div>
                                <div class="form-group">
                                    <label>Phone / WhatsApp *</label>
                                    <input type="tel" name="client_phone" required placeholder="+231...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>I am a *</label>
                                <select name="client_type" required>
                                    <option value="">Select...</option>
                                    <option>Homeowner / Individual</option>
                                    <option>Business / SME</option>
                                    <option>Construction Company</option>
                                    <option>NGO</option>
                                </select>
                            </div>

                            <h4 style="font-size: 18px; margin: 32px 0 16px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 8px;">Job Details</h4>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Trade Required *</label>
                                    <select name="trade_needed" required>
                                        <option value="">Select...</option>
                                        <option>Electrician</option>
                                        <option>Plumber</option>
                                        <option>Welder / Fabricator</option>
                                        <option>Carpenter</option>
                                        <option>Mason / Bricklayer</option>
                                        <option>General Handyman</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Urgency *</label>
                                    <select name="urgency" required>
                                        <option value="">Select...</option>
                                        <option>Emergency (same day)</option>
                                        <option>Urgent (within 24 hours)</option>
                                        <option>Normal (within 3 days)</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Describe the Work *</label>
                                <textarea name="job_description" required placeholder="e.g. 'Repair a water pipe leak under the kitchen sink'"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Job Location / Address *</label>
                                <input type="text" name="job_location" required placeholder="e.g. Congo Town">
                            </div>

                            <p class="text-silver text-sm mb-4" style="margin-top: 32px;">We guarantee quality — if you are not satisfied with the work, we will send a replacement worker at no extra cost.</p>
                            
                            <div class="form-group" style="flex-direction: row; align-items: center; gap: 12px; margin-bottom: 32px;">
                                <input type="checkbox" name="agree_client" required style="width: auto;">
                                <label style="margin: 0; color: var(--black);">I understand and agree to the service terms *</label>
                            </div>

                            <button type="submit" class="btn-primary" v-magnetic style="width: 100%; justify-content: center; background-color: var(--orange);">Request a Worker&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg></button>
                        </form>
                    </div>
                </div>

            </div>
        </section>

    </main>
</template>
