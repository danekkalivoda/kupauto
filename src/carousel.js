import Vue from '../node_modules/vue/dist/vue.esm';
import Carousel from './components/carousel.vue';

Vue.config.devtools = true

new Vue({
    components: {Carousel}
}).$mount(`#app`);