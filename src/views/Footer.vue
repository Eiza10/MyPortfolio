<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h2>Haritz Eizagirre Maneiro</h2>
        </div>
        
        <div class="footer-links">
          <h3>{{ i18n.t('quickLinks') }}</h3>
          <ul>
            <li><router-link to="/">{{ i18n.t('home') }}</router-link></li>
            <li><router-link to="/about">{{ i18n.t('about') }}</router-link></li>
            <li><router-link to="/skills">{{ i18n.t('skills') }}</router-link></li>
            <li><router-link to="/projects">{{ i18n.t('projects') }}</router-link></li>
            <li><router-link to="/contact">{{ i18n.t('contact') }}</router-link></li>
          </ul>
        </div>
        
        <div class="footer-social">
          <h3>{{ i18n.t('social') }}</h3>
          <div class="social-icons">
            <a href="https://github.com/Eiza10" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/haritz-eizagirre-70b647302/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Haritz Eizagirre Maneiro </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import i18n from '@/store/i18n'

export default defineComponent({
  name: 'Footer',
  setup() {
    return {
      i18n
    }
  }
})
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--background-color);
  color: white;
  padding: 5rem 0 2rem;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
  margin-top: 2rem;
  
  
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
    
    .footer-brand {
      color: var(--text-color);
      h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        display: inline-block;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
          border-radius: 3px;
        }
      }
      
      p {
        line-height: 1.7;
      }
    }
    
    .footer-links {
      h3 {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        position: relative;
        display: inline-block;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
          border-radius: 3px;
        }
      }
      
      ul {
        list-style: none;
        
        li {
          margin-bottom: 0.8rem;
          
          a {
            text-decoration: none;
            transition: var(--transition);
            position: relative;
            padding-left: 15px;
            
            &::before {
              content: '•';
              position: absolute;
              left: 0;
              color: var(--primary-color);
            }
            
            &:hover {
              padding-left: 20px;
            }
          }
        }
      }
    }
    
    .footer-social {
      h3 {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        position: relative;
        display: inline-block;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
          border-radius: 3px;
        }
      }
      
      .social-icons {
        display: flex;
        gap: 1rem;
        
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: var(--rounded);
          text-decoration: none;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          background: var(--card-background);
          box-shadow: var(--shadow);
          
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: var(--transition);
            z-index: 0;
          }
          
          i {
            position: relative;
            z-index: 1;
            font-size: 1.4rem;
          }
        
          &:hover {
            transform: translateY(-5px);
            
            &::before {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  
  .footer-bottom {
    padding-top: 2rem;
    text-align: center;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent
      );
    }
    
    p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.9rem;
      margin: 0;
      
      // Improve contrast in dark mode
      body.dark-theme & {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}

@media (max-width: 768px) {
  footer {
    clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 100%);
    padding: 4rem 0 2rem;
    
    .footer-content {
      gap: 2rem;
    }
  }
}
</style>
