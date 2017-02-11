import * as Vue from 'vue';

import Gantt from '../src/index'

new Vue({
  el: '#vue-gantt-demo-component',
  components: {
    'vue-gantt': Gantt
  }
});
