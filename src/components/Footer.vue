<template>
    <footer class="footer bg-gray-800 text-white py-4">
      <div class="container mx-auto">
        <p>&copy; 2025 Trade. Minden jog fenntartva.</p>
        <div class="linkek container mx-auto flex gap-4">
        <!-- Two links that redirect to pages showing DOCX content -->
        <router-link to="/aszf" class="text-white hover:underline">ÁSZF</router-link>
        <router-link to="/adatk" class="text-white hover:underline">Adatkezelési Szabályzat</router-link>
      </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  }
  </script>