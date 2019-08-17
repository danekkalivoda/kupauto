<template>
  <div :class="[ template ? template : 'flex flex-wrap w-full' ]">
    <gallery :images="images" :index="index" :template="template" @close="index = null"></gallery>
    <div
      class="group cursor-pointer"
      :class="[ template ? template + '-grid-' + imageIndex : 'inline-flex w-1/3 sm:w-1/4 md:w-1/5' ]"
      data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="300"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex">
        <div class="block relative overflow-hidden aspect-ratio-square transition w-full" :class="template ? '' : 'scale-90 group-hover:scale-100'">
          <img :src="image" class="w-full h-full absolute top-0 left-0 object-cover z-10 transition-slow opacity-0 opacity-100">
          <div class="absolute w-full h-full -translate-y-1/2 z-0 transition-slow">
            <div class="spinner"></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    props: {
      images: Array, 
      template: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        index: null,
        template: null
      };
    },
    components: {
      'gallery': VueGallery
    },
  }
</script> 
