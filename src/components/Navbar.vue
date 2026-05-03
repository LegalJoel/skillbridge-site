<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <nav class="navbar">
        <div class="nav-container">
            <router-link to="/" class="logo" @click="isMenuOpen = false">
                <img src="/assets/logomark.png" alt="SkillBridge" style="height: 40px; width: 40px; border-radius: 10px;">
                <div class="logo-text">
                    <strong>SkillBridge</strong><br>
                    <span>Liberia</span>
                </div>
            </router-link>
            
            <div class="nav-links" :class="{ 'active': isMenuOpen }">
                <router-link to="/" @click="isMenuOpen = false">Home</router-link>
                <router-link to="/about" @click="isMenuOpen = false">About</router-link>
                <router-link to="/services" @click="isMenuOpen = false">Services</router-link>
                <router-link to="/register" @click="isMenuOpen = false">Register</router-link>
                <router-link to="/contact" @click="isMenuOpen = false">Contact</router-link>
            </div>

            <div class="nav-actions">
                <router-link to="/register#hire" class="contact-btn btn-primary header-cta" style="background-color: var(--orange); color: white; border: none;">
                    <span>Hire a Worker</span>
                    <span class="icon-circle" style="background: white; color: var(--orange);">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </router-link>
                <button class="menu-btn" @click="toggleMenu" aria-label="Toggle Menu">
                    <svg v-if="!isMenuOpen" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
    </nav>
</template>

