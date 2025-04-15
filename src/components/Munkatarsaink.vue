<template>
  <div id="munkatarsaink" class="munkatarsaink container mx-auto py-8">
    <!-- Title -->
    <h1 class="text-3xl font-bold text-center mb-8">Munkatársaink</h1>

    <!-- Swiper Wrapper to Center Everything -->
    <div class="w-full flex justify-center">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="w-full max-w-screen-xl swiper-container"
      >
        <SwiperSlide v-for="card in cards" :key="card.id">
          <!-- Flex container for card & text -->
          <div class="flex flex-col items-center w-full px-4">
            <!-- Card with image, title & description -->
            <div class="kartya card w-full bg-base-100">
              <figure class="figura relative">
                <div class="kep-container">
                  <img :src="card.image" :alt="card.title" class="kep w-full h-60 object-cover" />
                </div>
                <div class="overlay absolute inset-0 flex flex-col justify-center items-center">
                  <div class="szoveg-kep text-content bg-black bg-opacity-50 text-white p-4 rounded">
                    <h2 class="card-title text-xl font-bold">{{ card.title }}</h2>
                    <p class="text-sm">{{ card.description }}</p>
                  </div>
                </div>
              </figure>
            </div>

            <!-- Bemutatkozas Under the Card -->
            <div class="szoveg-kep bemutatkozas bg-base-300 rounded-box grid w-full place-items-center p-4">
              <p class="text-lg">
                {{ card.bemutatkozas }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination, Navigation as SwiperNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Card Data
const cards = [
  { id: 1, title: "Papp Sándor", description: "Crypto", image: "faszi.png", bemutatkozas: "3-4 éve foglalkozom a cryptoval főként altcoinokkal azon belül pedig daytrade vagy holdolással a forex világába fél éve kerültem bele ezalatt rengeteget tanultam, amit a saját területemen is hasznosítani tudtam és még jobb kereskedővé tudtam válni."},
  { id: 2, title: "Garancsi Benjamin", description: "XAUUSD", image: "faszi2.png", bemutatkozas: "Szenvedélyes és fegyelmezett forex kereskedő vagyok, éles szemmel a piaci trendekre és az adatalapú stratégiákra. Magabiztosan mozgok nagy nyomás alatt, a kockázatkezelés és a technikai elemzés révén érek el következetes eredményeket. Folyamatosan tanulok, alkalmazkodom és optimalizálok a globális devizapiacon való hosszú távú siker érdekében." },
  { id: 3, title: "Káplár Patrik", description: "Eur/Usd", image: "faszi.png", bemutatkozas: "Korábban villanyszerelőként dolgoztam, és számos fizikai munkakörben szereztem tapasztalatot. Egy idő után azonban elegem lett abból, hogy mások álmain dolgozom – ezért 2019-ben úgy döntöttem, kezembe veszem a saját jövőm irányítását, és elkezdtem tanulni a forex kereskedelmet. Azóta rengeteget fejlődtem, kialakítottam a saját, jól működő stratégiámat." },
  { id: 4, title: "Kecskés Kevin", description: "Crypto", image: "faszi2.png", bemutatkozas: "4 éve foglalkozom pénzügyi piacokkal, azon belül kriptovalutákkal, és azóta folyamatosan bővítem a tudásom a blokklánc, a piaci ciklusok és a forex világában. Az évek során rengeteg tapasztalatot szereztem, és örömmel osztom meg másokkal, hogy segíthessek nekik a piacon való boldogulásban." },
];
</script>

<style scoped>
.swiper-container {
  padding-bottom: 40px; /* more space for pagination dots */
}

/* Optional: make sure arrows and dots are not cut off */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #249bce;
}

:deep(.swiper-pagination-bullet) {
  background-color: #249bce;
}
</style>