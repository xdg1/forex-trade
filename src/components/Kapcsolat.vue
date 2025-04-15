<template>
    <section class="kapcsolat" id="kapcsolat">
            <h1 class="text-3xl font-bold text-center mb-8">Kapcsolat</h1>
            <div class="info-row grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 px-4">
            <!-- Cell 1 -->
            <div class="info-cell flex flex-col items-center text-center">
                <font-awesome-icon class="ikon" icon="fa-solid fa-location-dot" />
                <h2 class="text-xl font-bold mb-2">Székhely</h2>
                <p class="text-sm text-gray-600">This is some basic text for the first cell.</p>
            </div>

            <!-- Cell 2 -->
            <div class="info-cell flex flex-col items-center text-center">
                <font-awesome-icon class="ikon" icon="fa-solid fa-envelope" />
                <h2 class="text-xl font-bold mb-2">E-mail</h2>
                <p class="text-sm text-gray-600">This is some basic text for the second cell.</p>
            </div>
            <!-- Cell 3 -->
            <div class="info-cell flex flex-col items-center text-center">
                <font-awesome-icon class="ikon" icon="fa-solid fa-phone" />
                <h2 class="text-xl font-bold mb-2">Telefonszám?</h2>
                <p class="text-sm text-gray-600">This is some basic text for the third cell.</p>
            </div>
        </div>
       
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.7504538404637!2d21.64850137671994!3d47.55318539166413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470dbf2a5958ef%3A0x4f5d4004742322e8!2sKassai%20Office%20Building!5e0!3m2!1sen!2shu!4v1743939100022!5m2!1sen!2shu" 
                style="border:0;" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" 
                width="100%" height="450" allowfullscreen>

                </iframe>
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