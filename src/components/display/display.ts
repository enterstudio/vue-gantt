import * as Vue from 'vue';
import Component from 'vue-class-component';

require('./display.scss');
@Component({
  template: require('./display.pug'),
})
export default class Display extends Vue {

}
