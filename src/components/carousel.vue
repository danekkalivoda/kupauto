<template>

  <vueper-slides
    :visible-slides="5"
    :dragging-distance="70"
    :bullets="false"
    slide-multiple
    :arrows-outside="false"
    :slide-ratio="1/5"
    :breakpoints="{
      1200: {
        visibleSlides: 3,
        slideRatio: 1/3
      },
      640: {
        visibleSlides: 2,
        slideRatio: 1/2
      },
      480: {
        visibleSlides: 1,
        slideRatio: 1/1
      }
    }"
    class="no-shadow">
    <vueper-slide v-for="(slide, i) in slides" :key="i" >
      <div slot="slideContent">
        <v-layout>
          <div class="w-full">
            <div class="block relative aspect-ratio-4/3 overflow-hidden transition group-hover:scale-110 bg-cover" :style="{ backgroundImage: 'url(' + slide.image + ')' }"></div>
            <div class="text-green-500 bg-gray-800 p-4">{{ slide.title }}</div>
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