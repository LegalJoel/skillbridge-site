<script setup>
</script>

<template>
    <footer style="background-color: var(--black); color: var(--white); padding: 80px var(--container-padding-desktop) 40px;">
        <div class="footer-top">
            <div class="logo" style="color: var(--white);">
                <img src="/assets/logomark.png" alt="SkillBridge" style="height: 48px; width: 48px; border-radius: 8px;">
                <div class="logo-text" style="font-size: 20px;">
                    <strong>SkillBridge</strong><br>
                    <span style="color: rgba(255,255,255,0.6);">Liberia</span>
                </div>
            </div>
            <div class="footer-slogan">
                BRIDGE YOUR SKILLS FORWARD.
            </div>
        </div>

        <div class="footer-grid">
            <div>
                <h4 style="font-size: 14px; text-transform: uppercase; margin-bottom: 16px;">SUBSCRIBE TO UPDATES</h4>
                <div style="display: flex; background: rgba(255,255,255,0.1); border-radius: 40px; padding: 8px 8px 8px 24px;">
                    <input type="email" placeholder="you@email.com" style="background: transparent; border: none; color: white; flex: 1; outline: none; font-family: inherit;">
                    <button style="background: var(--orange); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
                <p style="margin-top: 24px; color: rgba(255,255,255,0.6); font-size: 14px; max-width: 300px;">Liberia's first coordinated skilled trades network. Connecting vetted, safety-trained workers with clients.</p>
            </div>
            
            <div>
                <h4 style="font-size: 14px; text-transform: uppercase; margin-bottom: 24px;">SERVICES</h4>
                <ul style="list-style: none; padding: 0; color: rgba(255,255,255,0.6); font-size: 14px; line-height: 2.5;">
                    <li><router-link to="/services">Electrical Work</router-link></li>
                    <li><router-link to="/services">Plumbing</router-link></li>
                    <li><router-link to="/services">Welding & Fabrication</router-link></li>
                    <li><router-link to="/services">General Repairs</router-link></li>
                </ul>
            </div>
            
            <div>
                <h4 style="font-size: 14px; text-transform: uppercase; margin-bottom: 24px;">COMPANY</h4>
                <ul style="list-style: none; padding: 0; color: rgba(255,255,255,0.6); font-size: 14px; line-height: 2.5;">
                    <li><router-link to="/about">About Us</router-link></li>
                    <li><router-link to="/about#values">Our Values</router-link></li>
                    <li><router-link to="/register">Worker Registration</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </div>

            <div>
                <h4 style="font-size: 14px; text-transform: uppercase; margin-bottom: 24px;">CONTACT</h4>
                <ul style="list-style: none; padding: 0; color: rgba(255,255,255,0.6); font-size: 14px; line-height: 2.5;">
                    <li><a href="tel:+231889305016">+231 889 305 016</a></li>
                    <li><a href="mailto:info@skillbridgeliberia.com">info@skillbridgeliberia.com</a></li>
                    <li><a href="#">Monrovia, Liberia</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div>© 2026 SkillBridge Liberia Corporation.</div>
            <div>OHS Reg. No. 19 Compliant</div>
        </div>
    </footer>
</template>
