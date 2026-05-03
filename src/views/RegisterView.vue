<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const activeTab = ref('hire')
const formContainer = ref(null)

const switchTab = async (tab) => {
    if (activeTab.value === tab) return

    // Fade out current panel
    await gsap.to('.register-panel.active', { opacity: 0, y: 15, duration: 0.25, ease: 'power2.in' })
    
    activeTab.value = tab
    
    // Wait for DOM to update
    await nextTick()

    // Fade in new panel
    gsap.fromTo('.register-panel.active', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
    )
}

onMounted(() => {
    if (route.hash === '#worker') {
        activeTab.value = 'worker'
    } else {
        activeTab.value = 'hire'
    }

    gsap.from('.page-hero h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
    gsap.from('.page-hero p', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })

    gsap.from('.floating-form-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    })
})

watch(() => route.hash, (newHash) => {
    if (newHash === '#worker') {
        switchTab('worker')
    } else {
        switchTab('hire')
    }
})
</script>

<template>
    <main>
        <!-- Page Hero (Extra padding bottom to allow card to overlap) -->
        <section class="page-hero" style="padding-bottom: 160px; background-color: var(--gray-bg);">
            <div class="container text-center">
                <h1 class="h1 text-gradient">Register With SkillBridge</h1>
                <p class="text-silver text-lg" style="max-width: 600px; margin: 0 auto;">Join as a skilled worker or request a tradesperson for your home or business — all in one place.</p>
            </div>
        </section>

        <!-- Elevated Form Section -->
        <section class="section" style="padding-top: 0; margin-top: -100px; position: relative; z-index: 10;">
            <div class="container" style="max-width: 800px; margin: 0 auto;">
                
                <div class="floating-form-card" ref="formContainer">
                    
                    <!-- Pill Toggle -->
                    <div class="pill-toggle-wrapper">
                        <div class="pill-toggle">
                            <div class="pill-slider" :class="activeTab"></div>
                            <button class="pill-btn" :class="{ active: activeTab === 'hire' }" @click="switchTab('hire')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>
                                I Need a Worker
                            </button>
                            <button class="pill-btn" :class="{ active: activeTab === 'worker' }" @click="switchTab('worker')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.2em; height: 1.2em;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                                I'm a Worker
                            </button>
                        </div>
                    </div>

                    <!-- Hire Panel -->
                    <div v-if="activeTab === 'hire'" class="register-panel active">
                        <div class="panel-header">
                            <h3 class="h3">Request a Skilled Worker</h3>
                            <p class="text-silver mt-2">Tell us what you need and where, and we'll match you with the right verified worker within 2 hours.</p>
                        </div>

                        <div class="info-alert orange">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" /></svg>
                            <span>Service is free to request. You pay the worker directly at market rates. A small coordination fee (10–15%) applies.</span>
                        </div>

                        <form name="client-request" method="POST" data-netlify="true" action="/thank-you">
                            <input type="hidden" name="form-name" value="client-request" />
                            
                            <h4 class="form-section-title">Your Information</h4>
                            <div class="form-row">
                                <div class="form-floating">
                                    <input type="text" name="client_name" required placeholder=" ">
                                    <label>Full Name *</label>
                                </div>
                                <div class="form-floating">
                                    <input type="tel" name="client_phone" required placeholder=" ">
                                    <label>Phone / WhatsApp *</label>
                                </div>
                            </div>
                            
                            <div class="form-floating select-wrapper">
                                <select name="client_type" required>
                                    <option value="" disabled selected hidden></option>
                                    <option>Homeowner / Individual</option>
                                    <option>Business / SME</option>
                                    <option>Construction Company</option>
                                    <option>NGO</option>
                                </select>
                                <label>I am a *</label>
                            </div>

                            <h4 class="form-section-title mt-4">Job Details</h4>
                            <div class="form-row">
                                <div class="form-floating select-wrapper">
                                    <select name="trade_needed" required>
                                        <option value="" disabled selected hidden></option>
                                        <option>Electrician</option>
                                        <option>Plumber</option>
                                        <option>Welder / Fabricator</option>
                                        <option>Carpenter</option>
                                        <option>Mason / Bricklayer</option>
                                        <option>General Handyman</option>
                                    </select>
                                    <label>Trade Required *</label>
                                </div>
                                <div class="form-floating select-wrapper">
                                    <select name="urgency" required>
                                        <option value="" disabled selected hidden></option>
                                        <option>Emergency (same day)</option>
                                        <option>Urgent (within 24 hours)</option>
                                        <option>Normal (within 3 days)</option>
                                        <option>Flexible</option>
                                    </select>
                                    <label>Urgency *</label>
                                </div>
                            </div>
                            
                            <div class="form-floating">
                                <textarea name="job_description" required placeholder=" " rows="3"></textarea>
                                <label>Describe the Work *</label>
                            </div>
                            
                            <div class="form-floating">
                                <input type="text" name="job_location" required placeholder=" ">
                                <label>Job Location / Address *</label>
                            </div>

                            <p class="text-silver text-sm mt-4 mb-4">We guarantee quality — if you are not satisfied with the work, we will send a replacement worker at no extra cost.</p>
                            
                            <label class="checkbox-container">
                                <input type="checkbox" name="agree_client" required>
                                <span class="checkmark"></span>
                                I understand and agree to the service terms *
                            </label>

                            <button type="submit" class="btn-primary w-100 mt-4" v-magnetic style="background-color: var(--orange);">
                                Request a Worker
                            </button>
                        </form>
                    </div>

                    <!-- Worker Panel -->
                    <div v-if="activeTab === 'worker'" class="register-panel active">
                        <div class="panel-header">
                            <h3 class="h3">Worker Registration Form</h3>
                            <p class="text-silver mt-2">Join Liberia's most trusted skilled trades network. Fill out the form below and our team will contact you within 48 hours.</p>
                        </div>
                        
                        <div class="info-alert blue">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>
                            <span>Registration fee: $5–10 one-time | Monthly dues: $3–5 (payable via Orange Money / MTN Mobile Money)</span>
                        </div>

                        <form name="worker-registration" method="POST" data-netlify="true" action="/thank-you">
                            <input type="hidden" name="form-name" value="worker-registration" />
                            
                            <h4 class="form-section-title">Personal Information</h4>
                            <div class="form-row">
                                <div class="form-floating">
                                    <input type="text" name="fullname" required placeholder=" ">
                                    <label>Full Name *</label>
                                </div>
                                <div class="form-floating">
                                    <input type="date" name="dob" required placeholder=" " class="has-value">
                                    <label>Date of Birth *</label>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-floating">
                                    <input type="tel" name="phone" required placeholder=" ">
                                    <label>Phone / WhatsApp *</label>
                                </div>
                                <div class="form-floating">
                                    <input type="email" name="email" placeholder=" ">
                                    <label>Email (optional)</label>
                                </div>
                            </div>
                            <div class="form-floating">
                                <input type="text" name="address" required placeholder=" ">
                                <label>Home Address / Neighborhood *</label>
                            </div>

                            <h4 class="form-section-title mt-4">Trade Information</h4>
                            <div class="form-row">
                                <div class="form-floating select-wrapper">
                                    <select name="trade" required>
                                        <option value="" disabled selected hidden></option>
                                        <option>Electrician</option>
                                        <option>Plumber</option>
                                        <option>Welder / Fabricator</option>
                                        <option>Carpenter</option>
                                        <option>Mason / Bricklayer</option>
                                        <option>General Repair / Handyman</option>
                                    </select>
                                    <label>Primary Trade *</label>
                                </div>
                                <div class="form-floating select-wrapper">
                                    <select name="experience" required>
                                        <option value="" disabled selected hidden></option>
                                        <option>1–2 years</option>
                                        <option>3–5 years</option>
                                        <option>6–10 years</option>
                                        <option>10+ years</option>
                                    </select>
                                    <label>Years of Experience *</label>
                                </div>
                            </div>
                            <div class="form-floating select-wrapper">
                                <select name="tools" required>
                                    <option value="" disabled selected hidden></option>
                                    <option>Yes – full set</option>
                                    <option>Yes – basic tools only</option>
                                    <option>No – I need tools provided</option>
                                </select>
                                <label>Do you have your own tools? *</label>
                            </div>

                            <h4 class="form-section-title mt-4">Declaration</h4>
                            <p class="text-silver text-sm mb-4">By submitting this form, I confirm that all information provided is accurate and truthful. I agree to comply with the SkillBridge Liberia Code of Conduct and attend required safety training.</p>
                            
                            <label class="checkbox-container">
                                <input type="checkbox" name="agree" required>
                                <span class="checkmark"></span>
                                I agree to the terms and conditions *
                            </label>

                            <button type="submit" class="btn-primary w-100 mt-4" v-magnetic style="background-color: var(--blue);">
                                Submit Registration
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>

    </main>
</template>

<style scoped>
/* Floating Card Wrapper */
.floating-form-card {
    background-color: var(--white);
    border-radius: 24px;
    padding: 48px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}

/* Pill Toggle Switch */
.pill-toggle-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
}

.pill-toggle {
    position: relative;
    display: inline-flex;
    background-color: var(--gray-bg);
    border-radius: 40px;
    padding: 8px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
}

.pill-slider {
    position: absolute;
    top: 8px;
    bottom: 8px;
    width: calc(50% - 8px);
    border-radius: 32px;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s ease;
}

.pill-slider.hire {
    transform: translateX(0);
    background-color: var(--orange);
    box-shadow: 0 4px 12px rgba(232, 169, 58, 0.3);
}

.pill-slider.worker {
    transform: translateX(100%);
    background-color: var(--blue);
    box-shadow: 0 4px 12px rgba(37, 99, 255, 0.3);
}

.pill-btn {
    position: relative;
    z-index: 2;
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 500;
    color: var(--silver-gray);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
}

.pill-btn.active {
    color: var(--white);
}

.pill-btn svg {
    transition: transform 0.3s ease;
}

.pill-btn.active svg {
    transform: scale(1.1);
}

/* Form Styles */
.panel-header {
    text-align: center;
    margin-bottom: 32px;
}

.form-section-title {
    font-size: 18px;
    margin-bottom: 24px;
    color: var(--black);
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    padding-bottom: 12px;
}

.info-alert {
    display: flex;
    gap: 16px;
    padding: 16px 20px;
    border-radius: 12px;
    margin-bottom: 32px;
    font-size: 14px;
    font-weight: 500;
    align-items: flex-start;
}

.info-alert svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
}

.info-alert.orange {
    background: rgba(232, 169, 58, 0.1);
    color: var(--orange);
}

.info-alert.blue {
    background: rgba(37, 99, 255, 0.1);
    color: var(--blue);
}

/* Floating Labels */
.form-row {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
}

.form-row > * {
    flex: 1;
}

.form-floating {
    position: relative;
    margin-bottom: 24px;
}

.form-row .form-floating {
    margin-bottom: 0;
}

.form-floating input,
.form-floating select,
.form-floating textarea {
    width: 100%;
    padding: 28px 16px 8px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 12px;
    font-family: inherit;
    font-size: 16px;
    background-color: var(--gray-bg);
    color: var(--black);
    transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.form-floating textarea {
    resize: vertical;
    min-height: 120px;
}

.form-floating input:focus,
.form-floating select:focus,
.form-floating textarea:focus {
    outline: none;
    border-color: var(--black);
    background-color: var(--white);
}

.form-floating label {
    position: absolute;
    top: 18px;
    left: 16px;
    font-size: 16px;
    color: var(--silver-gray);
    pointer-events: none;
    transition: transform 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    transform-origin: left top;
}

/* Trigger floating state */
.form-floating input:focus ~ label,
.form-floating input:not(:placeholder-shown) ~ label,
.form-floating textarea:focus ~ label,
.form-floating textarea:not(:placeholder-shown) ~ label,
.form-floating select:focus ~ label,
.form-floating select:valid ~ label,
.form-floating input.has-value ~ label {
    transform: translateY(-10px) scale(0.75);
    color: var(--black);
    font-weight: 500;
}

/* Special fix for date inputs to always float */
.form-floating input[type="date"] ~ label {
    transform: translateY(-10px) scale(0.75);
    color: var(--black);
    font-weight: 500;
}

/* Hide select placeholder option */
.form-floating select option[value=""][disabled] {
    display: none;
}
.form-floating select:invalid {
    color: transparent;
}
.form-floating select:focus {
    color: var(--black);
}

/* Custom Checkbox */
.checkbox-container {
    display: block;
    position: relative;
    padding-left: 32px;
    margin-bottom: 16px;
    cursor: pointer;
    font-size: 15px;
    user-select: none;
    color: var(--black);
}

.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: var(--white);
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    transition: all 0.3s ease;
}

.checkbox-container:hover input ~ .checkmark {
    border-color: var(--black);
}

.checkbox-container input:checked ~ .checkmark {
    background-color: var(--black);
    border-color: var(--black);
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
    display: block;
}

.checkbox-container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

/* Utilities */
.w-100 { width: 100%; display: flex; justify-content: center; }
.mt-2 { margin-top: 8px; }
.mt-4 { margin-top: 32px; }
.mb-4 { margin-bottom: 24px; }

@media (max-width: 768px) {
    .floating-form-card {
        padding: 24px;
    }
    .pill-btn {
        padding: 12px 16px;
        font-size: 14px;
    }
    .form-row {
        flex-direction: column;
        gap: 0;
    }
    .form-row .form-floating {
        margin-bottom: 24px;
    }
}
</style>
