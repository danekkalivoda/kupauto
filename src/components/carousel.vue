<template>

    <vueper-slides class="no-shadow" :visible-slides="3" :slide-ratio="1/4" :dragging-distance="70">
      <vueper-slide v-for="(slide, i) in slides" :key="i">
        <div slot="slideContent">
          <v-layout>
          <div>
            <div>{{ slide.title }}</div>
            <div>{{ slide.content }}</div>
            <div class="block relative aspect-ratio-4/3 transition group-hover:scale-110">
              <img class="w-full h-full absolute top-0 left-0 object-cover z-10" :src="slide.image" :alt="slide.title">
            </div>
          </div>
          </v-layout>
        </div>
      </vueper-slide>
    </vueper-slides>

</template>

<script>
  import {VueperSlides, VueperSlide} from 'vueperslides';
  import 'vueperslides/dist/vueperslides.css';

  export default {
    name: 'App',
    props: {
      slides: Array
    },
    components: {
      VueperSlides,
      VueperSlide
    }
  }
</script>