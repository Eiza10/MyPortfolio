<template>
  <div class="skills">
    <section class="page-header">
      <div class="container">
        <h1>{{ i18n.t('technicalSkills') }}</h1>
      </div>
    </section>

    <section class="skills-content">
      <div class="container">
        <div class="skills-intro">
          <p>{{ i18n.t('skillsIntro') }}</p>
        </div>

        <div class="skills-categories">
          <div class="category" v-for="(category, index) in skillCategories" :key="index">
            <h2>{{ i18n.t(category.nameKey) }}</h2>
            <div class="skills-grid">
              <div class="skill-item" v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
                <div class="skill-header">
                  <h3>{{ skill.name }}</h3>
                  <div class="skill-level">
                    <div class="level-indicator" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
                <p class="skill-description">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="additional-skills">
          <h2>{{ i18n.t('toolsOthers') }}</h2>
          <div class="tool-tags">
            <span class="tool-tag" v-for="(tool, index) in tools" :key="index">
              {{ tool }}
            </span>
          </div>
        </div>

        <div class="certifications">
          <h2>{{ i18n.t('certifications') }}</h2>
          <div class="certification-cards">
            <div class="certification-card" v-for="(cert, index) in certifications" :key="index">
              <div class="cert-header">
                <i :class="cert.icon"></i>
                <h3>{{ cert.name }}</h3>
              </div>
              <p class="cert-issuer">{{ cert.issuer }}</p>
              <p class="cert-date">{{ cert.date }}</p>
            </div>
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
  name: 'Skills',
  setup() {
    const skillCategories = [
      {
        nameKey: 'frontendDev',
        skills: [
          {
            name: 'HTML & CSS',
            level: 90,
            description: 'Proficient in semantic HTML5, CSS3, responsive design, Flexbox, and Grid layouts.'
          },
          {
            name: 'JavaScript',
            level: 85,
            description: 'Strong knowledge of ES6+, DOM manipulation, async programming, and modern JS concepts.'
          },
          {
            name: 'TypeScript',
            level: 80,
            description: 'Experience with type systems, interfaces, and type-safe development practices.'
          },
          {
            name: 'Vue.js',
            level: 85,
            description: 'Proficient with Vue 3, Composition API, Vuex for state management, and Vue Router.'
          },
          {
            name: 'React',
            level: 75,
            description: 'Knowledge of functional components, hooks, context API, and React Router.'
          },
          {
            name: 'CSS Frameworks',
            level: 90,
            description: 'Experience with Bootstrap, Tailwind CSS, and SASS/SCSS preprocessors.'
          }
        ]
      },
      {
        nameKey: 'backendDev',
        skills: [
          {
            name: 'Node.js',
            level: 80,
            description: 'Experience building RESTful APIs and server-side applications with Express.js.'
          },
          {
            name: 'C#',
            level: 70,
            description: 'Knowledge of C# language features and object-oriented programming principles.'
          },
          {
            name: '.NET',
            level: 65,
            description: 'Experience with ASP.NET Core for building web applications and APIs.'
          },
          {
            name: 'PHP',
            level: 75,
            description: 'Knowledge of PHP syntax, functions, and web development with PHP.'
          },
          {
            name: 'Databases',
            level: 85,
            description: 'Proficient in SQL, experienced with MySQL, PostgreSQL, and MongoDB.'
          },
          {
            name: 'API Development',
            level: 80,
            description: 'Experience designing and implementing RESTful APIs and working with GraphQL.'
          }
        ]
      }
    ]

    const tools = [
      'Git', 'GitHub', 'VS Code', 'Docker', 'Webpack', 'Babel',
      'npm', 'Yarn', 'Postman', 'Figma', 'Adobe XD', 'Jest',
      'Cypress', 'Linux', 'JIRA', 'Agile/Scrum'
    ]

    const certifications = [
      {
        name: 'Web Development Bootcamp',
        issuer: 'Udemy',
        date: 'June 2022',
        icon: 'fas fa-certificate'
      },
      {
        name: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        date: 'August 2022',
        icon: 'fas fa-code'
      },
      {
        name: 'Vue.js 3 - The Complete Guide',
        issuer: 'Udemy',
        date: 'January 2023',
        icon: 'fab fa-vuejs'
      }
    ]

    return {
      skillCategories,
      tools,
      certifications,
      i18n
    }
  }
})
</script>

<style lang="scss" scoped>
.page-header {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    margin: 0;
    color: white;
  }
}

.skills-content {
  padding: 4rem 0;
  
  .skills-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
    
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--text-color);
    }
  }
  
  .category {
    margin-bottom: 4rem;
    
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
      margin-bottom: 2rem;
      position: relative;
      padding-bottom: 10px;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: var(--primary-color);
      }
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      gap: 2rem;
      
      .skill-item {
        background-color: var(--card-background);
        border-radius: 8px;
        box-shadow: var(--shadow);
        padding: 1.5rem;
        transition: var(--transition);
        border: 1px solid var(--border-color);
        
        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-color);
        }
        
        .skill-header {
          margin-bottom: 1rem;
          
          h3 {
            font-size: 1.4rem;
            color: var(--primary-color);
            margin-bottom: 0.8rem;
          }
          
          .skill-level {
            height: 8px;
            background-color: var(--border-color);
            border-radius: 4px;
            overflow: hidden;
            
            .level-indicator {
              height: 100%;
              background: linear-gradient(to right, var(--primary-color), var(--accent-color));
              border-radius: 4px;
            }
          }
        }
        
        .skill-description {
          color: var(--text-color);
          line-height: 1.6;
        }
      }
    }
  }
  
  .additional-skills {
    margin-bottom: 4rem;
    
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
      margin-bottom: 2rem;
      position: relative;
      padding-bottom: 10px;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: var(--primary-color);
      }
    }
    
    .tool-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      
      .tool-tag {
        background-color: var(--card-hover);
        color: var(--primary-color);
        padding: 0.6rem 1.2rem;
        border-radius: 50px;
        font-weight: 500;
        box-shadow: var(--shadow-sm);
        transition: var(--transition);
        
        &:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
      }
    }
  }
  
  .certifications {
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
      margin-bottom: 2rem;
      position: relative;
      padding-bottom: 10px;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: var(--primary-color);
      }
    }
    
    .certification-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      
      .certification-card {
        background-color: var(--card-background);
        border-radius: 8px;
        box-shadow: var(--shadow);
        padding: 1.5rem;
        transition: var(--transition);
        border: 1px solid var(--border-color);
        
        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-color);
        }
        
        .cert-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          
          i {
            font-size: 2rem;
            color: var(--primary-color);
            margin-right: 1rem;
          }
          
          h3 {
            font-size: 1.3rem;
            color: var(--secondary-color);
          }
        }
        
        .cert-issuer {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--text-color);
        }
        
        .cert-date {
          color: var(--light-text);
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 6rem 0 3rem;
    
    h1 {
      font-size: 2.5rem;
    }
  }
  
  .category {
    h2 {
      font-size: 1.8rem;
    }
  }
  
  .certification-cards {
    grid-template-columns: 1fr !important;
  }
}
</style>
