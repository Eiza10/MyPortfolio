<template>
  <div class="projects">
    <section class="page-header">
      <div class="container">
        <h1>{{ i18n.t('projects') }}</h1>
      </div>
    </section>
    
    <section class="projects-showcase">
      <div class="container">
        <div class="filter-controls">
          <button 
            v-for="(category, index) in categories" 
            :key="index"
            @click="filterProjects(category)"
            :class="['filter-btn', activeCategory === category ? 'active' : '']"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="projects-container">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="index" 
            class="project-card"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="project-image-container">
              <img 
                v-if="project.image" 
                :src="project.image" 
                :alt="project.title" 
                class="project-image"
              >
              <div class="project-overlay">
                <div class="project-links">
                  <a v-if="project.demoLink" :href="project.demoLink" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a v-if="project.codeLink" :href="project.codeLink" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="call-to-action">
      <div class="container">
        <h2>{{ i18n.t('interestedProject') }}</h2>
        <p>{{ i18n.t('contactForWork') }}</p>
        <router-link to="/contact" class="btn btn-accent">{{ i18n.t('getInTouch') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import i18n from '@/store/i18n'

export default defineComponent({
  name: 'Projects',
  setup() {
    const projects = ref([
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce application with product listings, cart functionality, and user authentication.',
        image: 'https://via.placeholder.com/500x300/f1f5f9/6366f1?text=E-Commerce+Project',
        technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
        demoLink: 'https://example.com/ecommerce-demo',
        codeLink: 'https://github.com/yourusername/ecommerce-project',
        category: 'Web App'
      },
      {
        title: 'Task Management App',
        description: 'A responsive task management application with drag-and-drop functionality and real-time updates.',
        image: 'https://via.placeholder.com/500x300/f1f5f9/6366f1?text=Task+App',
        technologies: ['React', 'Firebase', 'Tailwind CSS'],
        demoLink: 'https://example.com/task-app-demo',
        codeLink: 'https://github.com/yourusername/task-app',
        category: 'Web App'
      },
      {
        title: 'Weather Dashboard',
        description: 'A weather dashboard that provides current weather conditions and forecasts for multiple locations.',
        image: 'https://via.placeholder.com/500x300/f1f5f9/6366f1?text=Weather+App',
        technologies: ['JavaScript', 'HTML/CSS', 'Weather API'],
        demoLink: 'https://example.com/weather-demo',
        codeLink: 'https://github.com/yourusername/weather-dashboard',
        category: 'Web App'
      },
      {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with Vue.js and featuring responsive design.',
        image: 'https://via.placeholder.com/500x300/f1f5f9/6366f1?text=Portfolio+Website',
        technologies: ['Vue.js', 'SCSS', 'JavaScript'],
        demoLink: 'https://example.com/portfolio-demo',
        codeLink: 'https://github.com/yourusername/portfolio',
        category: 'Website'
      },
      {
        title: 'Mobile Fitness App',
        description: 'A mobile application for tracking workouts, nutrition, and fitness goals.',
        image: 'https://via.placeholder.com/500x300/f1f5f9/6366f1?text=Fitness+App',
        technologies: ['React Native', 'Redux', 'Firebase'],
        demoLink: 'https://example.com/fitness-demo',
        codeLink: 'https://github.com/yourusername/fitness-app',
        category: 'Mobile App'
      }
    ]);

    const categories = ref(['All', 'Web App', 'Website', 'Mobile App']);
    const activeCategory = ref('All');

    const filterProjects = (category: string) => {
      activeCategory.value = category;
    };

    const filteredProjects = computed(() => {
      if (activeCategory.value === 'All') {
        return projects.value;
      }
      return projects.value.filter(project => project.category === activeCategory.value);
    });

    return {
      projects,
      categories,
      activeCategory,
      filteredProjects,
      filterProjects,
      i18n
    }
  }
})
</script>

<style lang="scss" scoped>

.projects-showcase {
  padding: 5rem 0;
  
  .filter-controls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
    
    .filter-btn {
      background-color: transparent;
      border: none;
      padding: 0.5rem 1.5rem;
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-color);
      cursor: pointer;
      border-radius: var(--rounded-full);
      transition: var(--transition);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        opacity: 0;
        transform: scale(0);
        border-radius: inherit;
        transition: transform 0.3s, opacity 0.3s;
        z-index: -1;
      }
      
      &:hover, &.active {
        color: white;
        
        &::before {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      &.active {
        box-shadow: var(--shadow-sm);
      }
    }
  }
  
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2.5rem;
    
    .project-card {
      border-radius: var(--rounded-lg);
      overflow: hidden;
      background-color: var(--card-background);
      box-shadow: var(--shadow);
      transition: var(--transition);
      border: 1px solid var(--border-color);
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary-color);
        
        .project-overlay {
          opacity: 1;
        }
        
        .project-image {
          transform: scale(1.05);
        }
      }
      
      .project-image-container {
        position: relative;
        overflow: hidden;
        height: 220px;
      }
      
      .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      
      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(15, 23, 42, 0.3),
          rgba(99, 102, 241, 0.7)
        );
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        
        .project-links {
          display: flex;
          gap: 1.5rem;
          
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background-color: white;
            color: var(--primary-color);
            border-radius: var(--rounded-full);
            font-size: 1.2rem;
            transform: translateY(20px);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            
            &:hover {
              background-color: var(--accent-color);
              color: white;
            }
          }
        }
      }
      
      &:hover .project-links a {
        transform: translateY(0);
        opacity: 1;
        
        &:nth-child(1) {
          transition-delay: 0.1s;
        }
        
        &:nth-child(2) {
          transition-delay: 0.2s;
        }
      }
      
      .project-info {
        padding: 1.75rem;
        
        h3 {
          margin-bottom: 1rem;
          color: var(--secondary-color);
          font-size: 1.5rem;
        }
        
        p {
          color: var(--text-color);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
      }
      
      .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        
        .tech-tag {
          background-color: var(--card-hover);
          color: var(--primary-color);
          padding: 0.3rem 0.8rem;
          border-radius: var(--rounded-full);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}

.call-to-action {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-dark));
  color: white;
  text-align: center;
  
  h2 {
    color: white;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  
  p {
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }
  
  .btn {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 6rem 0 3rem;
    
    h1 {
      font-size: 2.5rem;
    }
    
    .lead {
      font-size: 1rem;
    }
  }
  
  .projects-container {
    grid-template-columns: 1fr;
  }
  
  .call-to-action {
    h2 {
      font-size: 1.8rem;
    }
  }
}
</style>
