import * as Vue from 'vue';

import Gantt from '../src/index'

require('./index.scss');

new Vue({
  el: '#vue-gantt-demo-component',
  components: {
    'vue-gantt': Gantt
  }
});
