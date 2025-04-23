<template>
  <div id="app" :class="{ 'dark-theme': themeStore.isDarkMode }">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
import themeStore from '@/store/theme'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    return {
      themeStore
    }
  }
})
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

// Ensure proper background gradient in both light and dark modes
body.dark-theme #app {
  background-image: linear-gradient(
    to bottom right,
    rgba(129, 140, 248, 0.05) 0%,
    rgba(251, 146, 60, 0.05) 100%
  );
}

body:not(.dark-theme) #app {
  background-image: linear-gradient(
    to bottom right,
    rgba(99, 102, 241, 0.05) 0%,
    rgba(249, 115, 22, 0.05) 100%
  );
}

header {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  transition: var(--transition);
}

// Add dark mode styles for header
body.dark-theme header {
  background-color: rgba(30, 41, 59, 0.85); /* Dark background with opacity */
  border-bottom-color: rgba(51, 65, 85, 0.8);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1240px;
  margin: 0 auto;
  
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--secondary-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: var(--primary-color);
      border-radius: 50%;
      margin-right: 12px;
    }
    
    &::after {
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: var(--accent-color);
      border-radius: 50%;
      margin-left: 8px;
      animation: pulse 2s infinite;
    }
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    
    a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      position: relative;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 0.5rem 0;
      
      &::before, &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        transition: 0.3s;
        opacity: 0;
        background-color: var(--primary-color);
      }
      
      &::before {
        top: 0;
        left: 0;
      }
      
      &::after {
        bottom: 0;
        right: 0;
      }
      
      &:hover::before, 
      &:hover::after,
      &.router-link-active::before,
      &.router-link-active::after {
        width: 50%;
        opacity: 1;
      }
      
      &.router-link-active {
        color: var(--primary-color);
        font-weight: 600;
      }
    }
  }
}

main {
  flex: 1;
  margin-top: 80px; /* Header height + some spacing */
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  nav {
    padding: 1rem;
    
    .logo {
      font-size: 1.5rem;
    }
    
    .nav-links {
      gap: 1.5rem;
      font-size: 0.85rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Ensure all text has appropriate contrast in dark mode
body.dark-theme {
  color: var(--text-color);
}
</style>
