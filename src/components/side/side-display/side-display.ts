import * as Vue from 'vue';
import Component from 'vue-class-component';

require('./side-display.scss');
@Component({
  template: require('./side-display.pug'),
})
export default class SideDisplay extends Vue {

}
