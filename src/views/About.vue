<template>
  <div class="about">
    <section class="page-header">
      <div class="container">
        <h1>{{ i18n.t('aboutMe') }}</h1>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="profile-area">
          <div class="profile-image">
            <img src="@/assets/images/neu.jpg" alt="Haritz Eizagirre">
          </div>
          <div class="profile-details">
            <h2>Haritz Eizagirre Maneiro</h2>
            <p class="profile-subtitle">{{ i18n.t('heroTitle') }}</p>
            <div class="profile-links">
              <a href="https://www.linkedin.com/in/haritz-eizagirre-70b647302/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/Eiza10" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="about-text">
          <h3>{{ i18n.t('whoIAm') }}</h3>
          <p>{{ i18n.t('aboutDescription1') }}</p>
          <p>{{ i18n.t('aboutDescription2') }}</p>

          <h3>{{ i18n.t('education') }}</h3>
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-date">
                <span>2023-Present</span>
              </div>
              <div class="timeline-content">
                <h4>{{ i18n.t('bachelor') }}</h4>
                <p>University of [University Name]</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-date">
                <span>2020-2023</span>
              </div>
              <div class="timeline-content">
                <h4>{{ i18n.t('technical') }}</h4>
                <p>Technical Institute of [Institute Name]</p>
              </div>
            </li>
          </ul>

          <h3>{{ i18n.t('professionalInterests') }}</h3>
          <ul class="interests-list">
            <li>{{ i18n.t('webDev') }}</li>
            <li>{{ i18n.t('softwareArch') }}</li>
            <li>{{ i18n.t('mobileDev') }}</li>
            <li>{{ i18n.t('uiUxDesign') }}</li>
            <li>{{ i18n.t('cloudComputing') }}</li>
            <li>{{ i18n.t('devOps') }}</li>
          </ul>

          <div class="download-resume">
            <a href="/resume.pdf" download class="btn btn-primary">
              <i class="fas fa-download"></i> {{ i18n.t('downloadResume') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import i18n from '@/store/i18n'

export default defineComponent({
  name: 'About',
  setup() {
    return {
      i18n
    }
  }
})
</script>

<style lang="scss" scoped>

.about-content {
  padding: 4rem 0;
  
  .profile-area {
    display: flex;
    gap: 3rem;
    margin-bottom: 3rem;
    
    .profile-image {
      flex: 0 0 200px;
      
      img {
        width: 100%;
        border-radius: 10px;
        box-shadow: var(--shadow);
      }
    }
    
    .profile-details {
      flex: 1;
      
      h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: var(--secondary-color);
      }
      
      .profile-subtitle {
        font-size: 1.2rem;
        color: var(--light-text);
        margin-bottom: 1.5rem;
      }
      
      .profile-links {
        display: flex;
        gap: 1.5rem;
        
        a {
          display: flex;
          align-items: center;
          color: var(--text-color);
          font-weight: 500;
          
          i {
            margin-right: 0.5rem;
            font-size: 1.2rem;
          }
          
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  
  .about-text {
    h3 {
      font-size: 1.8rem;
      color: var(--secondary-color);
      margin: 2.5rem 0 1.5rem;
      
      &:first-child {
        margin-top: 0;
      }
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      color: var(--text-color);
    }
    
    .timeline {
      list-style: none;
      position: relative;
      margin: 2rem 0;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 120px;
        width: 2px;
        background-color: var(--border-color);
      }
      
      &-item {
        position: relative;
        margin-bottom: 2rem;
        display: flex;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
      
      &-date {
        width: 120px;
        text-align: right;
        padding-right: 2rem;
        font-weight: 600;
        color: var (--primary-color);
      }
      
      &-content {
        flex: 1;
        padding-left: 2rem;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--primary-color);
          z-index: 1;
        }
        
        h4 {
          margin: 0 0 0.5rem;
          font-size: 1.2rem;
          color: var(--secondary-color);
        }
        
        p {
          margin: 0;
          color: var(--light-text);
        }
      }
    }
    
    .interests-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
      list-style: none;
      
      li {
        background-color: var(--card-background);
        padding: 1rem;
        border-radius: 5px;
        box-shadow: var(--shadow);
        border-left: 3px solid var(--primary-color);
        color: var(--text-color);
      }
    }
    
    .download-resume {
      margin-top: 3rem;
      text-align: center;
      
      .btn {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        
        i {
          margin-right: 0.5rem;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .profile-area {
    flex-direction: column;
    
    .profile-image {
      flex: 0 0 auto;
      max-width: 250px;
      margin: 0 auto;
    }
    
    .profile-details {
      text-align: center;
      
      .profile-links {
        justify-content: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 6rem 0 3rem;
    
    h1 {
      font-size: 2.5rem;
    }
  }
  
  .timeline {
    &::before {
      left: 60px;
    }
    
    &-date {
      width: 60px;
      font-size: 0.9rem;
    }
  }
  
  .about-text {
    h3 {
      font-size: 1.5rem;
    }
  }
}
</style>
