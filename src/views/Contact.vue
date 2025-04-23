<template>
  <div class="contact">
    <section class="page-header">
      <div class="container">
        <h1>{{ i18n.t('contact') }}</h1>
      </div>
    </section>
    
    <section class="contact-section">
      <div class="container">
        <div class="contact-container">
          <div class="contact-info">
            <h2>{{ i18n.t('getInTouchTitle') }}</h2>
            <p>{{ i18n.t('contactIntro') }}</p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-content">
                  <h3>{{ i18n.t('email') }}</h3>
                  <p>hartz2004@gmail.com</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="info-content">
                  <h3>{{ i18n.t('phone') }}</h3>
                  <p>+34 688644190</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-content">
                  <h3>{{ i18n.t('location') }}</h3>
                  <p>Mutriku, Euskal Herria</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
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
          
          <div class="contact-form">
            <h2>{{ i18n.t('sendMessage') }}</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">{{ i18n.t('name') }}</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  :placeholder="i18n.t('name')"
                >
              </div>
              
              <div class="form-group">
                <label for="email">{{ i18n.t('email') }}</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  :placeholder="i18n.t('email')"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">{{ i18n.t('subject') }}</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  :placeholder="i18n.t('subject')"
                >
              </div>
              
              <div class="form-group">
                <label for="message">{{ i18n.t('message') }}</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  required
                  :placeholder="i18n.t('message')"
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" :disabled="isLoading">{{ i18n.t('send') }}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
import i18n from '@/store/i18n'
import emailjs from '@emailjs/browser'

export default defineComponent({
  name: 'Contact',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const isLoading = ref(false);

    onMounted(() => {
      emailjs.init("Kcqm8qtXaTdVGKteE");
    });

    const submitForm = async () => {
      try {
        isLoading.value = true;
        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "hartz2004@gmail.com"
        };

        const result = await emailjs.send(
          "service_c3v6pjd",
          "template_jlgx7oh",
          templateParams
        );

        if (result.status === 200) {
          alert(i18n.t('messageSent'));
          // Reset form
          form.name = '';
          form.email = '';
          form.subject = '';
          form.message = '';
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        alert(i18n.t('messageError'));
        console.error('Error sending message:', error);
      } finally {
        isLoading.value = false;
      }
    };

    return {
      form,
      submitForm,
      isLoading,
      i18n
    }
  }
})
</script>

<style lang="scss" scoped>

.contact-section {
  padding: 5rem 0;
  background-color: var(--background-color);
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }
  
  .contact-info {
    background-color: var(--card-background);
    border-radius: var(--rounded);
    box-shadow: var(--shadow);
    padding: 2.5rem;
    transition: var(--transition);
    border: 1px solid var(--border-color);
    
    &:hover {
      box-shadow: var(--shadow-lg);
      border-color: var(--primary-color);
    }
    
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 10px;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--accent-color));
        border-radius: 3px;
      }
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
      color: var(--text-color);
    }
    
    .info-items {
      margin-bottom: 2rem;
      
      .info-item {
        display: flex;
        margin-bottom: 1.5rem;
        
        &:last-child {
          margin-bottom: 0;
        }
        
        .info-icon {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background-color: rgba(99, 102, 241, 0.1);
          border-radius: var(--rounded);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          
          i {
            font-size: 1.5rem;
            color: var(--primary-color);
          }
        }
        
        .info-content {
          h3 {
            font-size: 1.2rem;
            margin-bottom: 0.3rem;
            color: var(--secondary-color);
          }
          
          p {
            margin: 0;
            font-size: 1rem;
            color: var(--light-text);
          }
        }
      }
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: var(--primary-color);
        color: white;
        border-radius: var(--rounded-full);
        text-decoration: none;
        transition: var(--transition);
        
        &:hover {
          transform: translateY(-5px);
          background-color: var(--primary-dark);
        }
        
        i {
          font-size: 1.2rem;
        }
      }
    }
  }
  
  .contact-form {
    background-color: var(--card-background);
    border-radius: var(--rounded);
    box-shadow: var(--shadow);
    padding: 2.5rem;
    transition: var(--transition);
    border: 1px solid var(--border-color);
    
    &:hover {
      box-shadow: var (--shadow-lg);
      border-color: var(--primary-color);
    }
    
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 10px;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--accent-color));
        border-radius: 3px;
      }
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var (--secondary-color);
      }
      
      input, 
      textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: var(--rounded);
        font-family: inherit;
        font-size: 1rem;
        background-color: var(--card-hover);
        color: var(--text-color);
        transition: var(--transition);
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }
        
        &::placeholder {
          color: var(--light-text);
          opacity: 0.7;
        }
      }
      
      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }
    
    .submit-btn {
      display: inline-block;
      padding: 0.75rem 2rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: var(--rounded);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
      box-shadow: var(--shadow-sm);
      
      &:hover {
        background-color: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: var(--shadow);
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
    
    .lead {
      font-size: 1rem;
    }
  }
  
  .contact-section {
    padding: 3rem 0;
    
    .contact-info,
    .contact-form {
      padding: 1.5rem;
      
      h2 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
