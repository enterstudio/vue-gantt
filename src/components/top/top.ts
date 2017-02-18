import * as Vue from 'vue';
import Component from 'vue-class-component';

require('./top.scss');
@Component({
  template: require('./top.pug'),
})
export default class Top extends Vue {

}
