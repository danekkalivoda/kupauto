import Vue from '../node_modules/vue/dist/vue.esm';
import Gallery from './components/gallery.vue';

Vue.config.devtools = true

new Vue({
    components: {Gallery}
}).$mount(`#app`);