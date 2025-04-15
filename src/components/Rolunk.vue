<template>
  <section id="rolunk" class="rolunk">
    <div class="text-content-r bg-black bg-opacity-50 text-white p-4 rounded">
      <div class="rolunk-content">
        <h1 class="text-3xl font-bold text-center mb-8">Rólunk</h1>
        <p class="rolunk_szoveg text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div class="text-center">
            <FontAwesomeIcon :icon="['fas', 'location-dot']" class="rolunk_ikon text-4xl text-blue-500 mb-4" />
            <h3 class="text-xl font-bold">Valami</h3>
            <p class="text-sm">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div class="text-center">
            <FontAwesomeIcon :icon="['fas', 'phone']" class="rolunk_ikon text-4xl text-blue-500 mb-4" />
            <h3 class="text-xl font-bold">Valami</h3>
            <p class="text-sm">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div class="text-center">
            <FontAwesomeIcon :icon="['fas', 'envelope']" class="rolunk_ikon text-4xl text-blue-500 mb-4" />
            <h3 class="text-xl font-bold">Valami</h3>
            <p class="text-sm">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div class="text-center">
            <FontAwesomeIcon :icon="['fas', 'envelope']" class="rolunk_ikon text-4xl text-blue-500 mb-4" />
            <h3 class="text-xl font-bold">Valami</h3>
            <p class="text-sm">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faLocationDot, faPhone, faEnvelope);

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>