<template>
  <header>
    <nav>
      <router-link to="/" class="logo">HEM</router-link>
      <div class="nav-links">
        <router-link to="/">{{ i18n.t('home') }}</router-link>
        <router-link to="/about">{{ i18n.t('about') }}</router-link>
        <router-link to="/skills">{{ i18n.t('skills') }}</router-link>
        <router-link to="/projects">{{ i18n.t('projects') }}</router-link>
        <router-link to="/contact">{{ i18n.t('contact') }}</router-link>
      </div>
      <div class="right-controls">
        <button @click="themeStore.toggleTheme()" class="theme-toggle" aria-label="Toggle dark mode">
          <span v-if="themeStore.isDarkMode" class="icon">🌙</span>
          <span v-else class="icon">☀️</span>
        </button>
        <div class="language-selector">
          <div class="language-options">
            <button 
              v-for="lang in ['en', 'es', 'eu']" 
              :key="lang" 
              @click="changeLanguage(lang as 'en' | 'es' | 'eu')" 
              class="lang-btn" 
              :class="{ active: i18n.currentLanguage() === lang }"
            >
              {{ lang.toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import i18n from '@/store/i18n'
import themeStore from '@/store/theme'

export default defineComponent({
  name: 'Header',
  setup() {
    const changeLanguage = (lang: 'en' | 'es' | 'eu') => {
      i18n.setLanguage(lang);
    };

    return {
      changeLanguage,
      i18n,
      themeStore
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  background-color: var(--bg-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  
  a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    
    &:hover, &.router-link-active {
      color: var(--primary-color);
    }
  }
}

.right-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--rounded-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  color: var(--secondary-color);
  
  &:hover {
    background-color: rgba(99, 102, 241, 0.1);
  }
  
  .icon {
    font-size: 1.25rem;
  }
}

.language-selector {
  .language-options {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .lang-btn {
      background-color: transparent;
      color: var(--secondary-color);
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.4rem 0.6rem;
      border: 1px solid transparent;
      cursor: pointer;
      transition: var(--transition);
      border-radius: var(--rounded-full);
      
      &:hover {
        color: var(--primary-color);
        background-color: rgba(99, 102, 241, 0.1);
      }
      
      &.active {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }
}


@media (max-width: 768px) {
  nav {
    padding: 1rem;
    
    .logo {
      font-size: 1.2rem;
      color: var(--secondary-color);
    }
    
    .nav-links {
      display: none;
    }
    
    .right-controls {
      margin-left: auto;
    }
  }
}

@media (max-width: 480px) {
  .right-controls {
    gap: 0.5rem;
  }
  
  .language-selector {
    .language-options {
      gap: 0.25rem;
      
      .lang-btn {
        padding: 0.3rem 0.5rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
