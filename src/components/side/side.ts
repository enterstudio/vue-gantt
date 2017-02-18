import * as Vue from 'vue';
import Component from 'vue-class-component';
import SideTop from './side-top/side-top';
import SideDisplay from './side-display/side-display';

require('./side.scss');
@Component({
  template: require('./side.pug'),
  components: {
    'side-top': SideTop,
    'side-display': SideDisplay
  }
})
export default class Side extends Vue {

}
