<template>
  <div>
    <div class="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div class="navbar-start">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
      </div>
      <div class="navbar-center">
        <router-link to="/"><a class="btn btn-ghost text-xl">Trade</a></router-link>
      </div>
      <div class="navbar-end" style="margin-right: 2vh !important;">
        <div class="flex gap-6">
          <!-- Main Navbar Buttons: conditionally render based on isHome -->
          <template v-if="isHome">
            <a @click.prevent="scrollToSection('fooldal')" class="btn btn-ghost text-l navlink">Főoldal</a>
            <a @click.prevent="scrollToSection('rolunk')" class="btn btn-ghost text-l navlink">Rólunk</a>
            <a @click.prevent="scrollToSection('munkatarsaink')" class="btn btn-ghost text-l navlink">Munkatársaink</a>
            <a @click.prevent="scrollToSection('kapcsolat')" class="btn btn-ghost text-l navlink">Kapcsolat</a>
          </template>
          <template v-else>
            <router-link to="/" class="btn btn-ghost text-l navlink">Főoldal</router-link>
          </template>
          <button @click="toggleMenu" class="menu-mob btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu with Transition -->
    <transition name="menu-slide">
      <div
        v-if="isMenuOpen"
        class="telomenu fixed top-0 right-0 w-64 h-screen shadow-lg z-50 flex flex-col items-start p-4 bg-base-100"
      >
        <button @click="toggleMenu" class="absolute top-4 right-4 btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="iksz h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Mobile Menu Links -->
        <template v-if="isHome">
          <a @click.prevent="scrollToSection('fooldal')" class="mobilelink btn btn-ghost text-l w-full text-left mt-8">Főoldal</a>
          <a @click.prevent="scrollToSection('rolunk')" class="mobilelink btn btn-ghost text-l w-full text-left">Rólunk</a>
          <a @click.prevent="scrollToSection('munkatarsaink')" class="mobilelink btn btn-ghost text-l w-full text-left">Munkatársaink</a>
          <a @click.prevent="scrollToSection('kapcsolat')" class="mobilelink btn btn-ghost text-l w-full text-left">Kapcsolat</a>
        </template>
        <template v-else>
          <router-link to="/" class="mobilelink btn btn-ghost text-l w-full text-left mt-8" @click="toggleMenu">Főoldal</router-link>
        </template>
        <p class="slide-copy copyright absolute bottom-4 left-4 text-sm text-gray-500">
          © 2025 Trade. Minden jog fenntartva.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    // Determine if we're on the Home route ("/")
    isHome() {
      return this.$route.path === '/';
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.isMenuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* Transition for the mobile menu */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.menu-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.menu-slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.menu-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.menu-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>