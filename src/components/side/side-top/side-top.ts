import * as Vue from 'vue';
import Component from 'vue-class-component';

require('./side-top.scss');
@Component({
  template: require('./side-top.pug'),
})
export default class SideTop extends Vue {

}
