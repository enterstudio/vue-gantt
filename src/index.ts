import * as Vue from 'vue';
import Component from 'vue-class-component';

require('./index.scss');
@Component({
  template: require('./index.pug'),
})
export default class Gantt extends Vue {

}
