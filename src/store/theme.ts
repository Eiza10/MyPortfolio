import { reactive } from 'vue';

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  applyTheme: () => void;
}

const theme = reactive<ThemeStore>({
  isDarkMode: localStorage.getItem('theme') === 'dark' || 
    (localStorage.getItem('theme') === null && 
     window.matchMedia('(prefers-color-scheme: dark)').matches),
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  },
  
  setTheme(isDark: boolean) {
    this.isDarkMode = isDark;
    this.applyTheme();
  },
  
  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
});

// Apply theme on initialization
theme.applyTheme();

export default theme;
