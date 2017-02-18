import * as Vue from 'vue';
import Component from 'vue-class-component';

import Top from './top/top';
import Side from './side/side'
import Display from './display/display';

require('./gantt.scss');
@Component({
  template: require('./gantt.pug'),
  components: {
    'top': Top,
    'side': Side,
    'display': Display
  }
})
export default class Gantt extends Vue {

}
