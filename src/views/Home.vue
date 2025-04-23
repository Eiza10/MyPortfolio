<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="profile-image">
            <img src="@/assets/images/neu.jpg" alt="Haritz Eizagirre">
          </div>
          <div class="hero-text">
            <h1>HARITZ EIZAGIRRE MANEIRO</h1>
            <div class="hero-name">{{ i18n.t('heroTitle') }}</div>
            <div class="hero-buttons">
              <router-link to="/contact" class="btn btn-primary">{{ i18n.t('contactMe') }}</router-link>
              <router-link to="/projects" class="btn btn-primary">{{ i18n.t('viewMyWork') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="about-preview">
      <div class="container">
        <h2>{{ i18n.t('aboutMe') }}</h2>
        <div class="about-content">
          <div class="about-text">
            <p>{{ i18n.t('aboutPreview') }}</p>
            <router-link to="/about" class="btn btn-accent">{{ i18n.t('readMore') }}</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="skills-preview">
      <div class="container">
        <h2 class="section-title">{{ i18n.t('technicalSkills') }}</h2>
        <div class="skills-cards">
          <div class="skill-card" v-for="(skill, index) in skills" :key="index">
            <div class="skill-icon">
              <i :class="skill.icon"></i>
            </div>
            <h3>{{ skill.category }}</h3>
            <ul>
              <li v-for="(item, i) in skill.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="centered-btn">
          <router-link to="/skills" class="btn btn-primary">{{ i18n.t('viewAllSkills') }}</router-link>
        </div>
      </div>
    </section>
    
    <section class="cta">
      <div class="container">
        <h2>{{ i18n.t('workTogether') }}</h2>
        <p>{{ i18n.t('workTogetherDesc') }}</p>
        <router-link to="/contact" class="btn btn-accent">{{ i18n.t('getInTouch') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import i18n from '@/store/i18n'

export default defineComponent({
  name: 'Home',
  setup() {
    const skills = [
      {
        category: 'Frontend',
        icon: 'fas fa-code',
        items: ['HTML/CSS', 'JavaScript', 'TypeScript']
      },
      {
        category: 'Backend',
        icon: 'fas fa-server',
        items: ['Node.js', 'Express.js', 'JAVA', '.NET', 'Django']
      },
      {
        category: 'Tools & Others',
        icon: 'fas fa-tools',
        items: ['Git','VS Code', 'SQL', 'MongoDB']
      }
    ]

    return {
      skills,
      i18n
    }
  }
})
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    background-image: radial-gradient(
      circle at 20% 30%,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 30%
    ), radial-gradient(
      circle at 80% 70%,
      rgba(249, 115, 22, 0.1) 0%,
      transparent 30%
    );
    z-index: -1;
  }
  
  &-content {
    max-width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    margin-top: -8vh;
    
    .profile-image {
    padding-right: 2rem;
    flex: 1 1 300px;
    max-width: 300px;

      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: var(--shadow);
      }
    }
    
    .hero-name {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
      position: relative;
      display: inline-block;  
    }
    
    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(120deg, var(--secondary-color), var(--primary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  
  &-buttons {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
    
    .btn {
      padding: 1rem 2rem;
      
      &-outline {
        border-width: 2px;
      }
    }
  }
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
  }
}

.about-preview {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--background-color);
  text-align: center;
  
  .about-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: var(--background-color);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    }
  
  .about-text {
    max-width: 800px;
    text-align: center;
    color: white;
    
    p {
      color: var(--background-color);
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
  }
}

.skills-preview {
  padding: 5rem 0;
  background-color: var(--background-color);
  
  .skills-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    
    .skill-card {
      text-align: center;
      padding: 2rem;
      
      .skill-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        
        i {
          font-size: 2rem;
        }
      }
      
      h3 {
        margin-bottom: 1.5rem;
        color: var(--secondary-color);
      }
      
      ul {
        list-style: none;
        
        li {
          margin-bottom: 0.5rem;
          color: var(--light-text-color);
          font-size: 1.1rem;
        }
      }
    }
  }
  
  .centered-btn {
    text-align: center;
  }
}

.cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--background-color);
  text-align: center;
  
  h2 {
    color: var(--background-color);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
}

@media (max-width: 768px) {
  .hero {
    &-content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2rem 1rem;

      h1 {
        font-size: 2.5rem;
      }
      
      h2 {
        font-size: 1.5rem;
      }
      
      p {
        font-size: 1rem;
      }
    }
    
    &-buttons {
      flex-direction: column;
      
      .btn {
        width: 100%;
        text-align: center;
      }
    }
  } 

  .profile-image img {
    margin-bottom: 1.5rem;
    max-width: 180px;
  }

  .section-title {
    font-size: 1.8rem;
  }
  
  .cta {
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
}
</style>
