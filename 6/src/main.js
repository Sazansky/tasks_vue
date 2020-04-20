import Vue from 'vue';
import Index from './Index.vue';

import {store} from './store/index.js';

new Vue({
  el: '#example',
  store: store,
  render: h => h(Index)
});
