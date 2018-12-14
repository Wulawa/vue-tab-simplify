import WTabs from './tabs';
import WTabItem from './tabItem';
let installed = false;

export default Vue => {
  if(installed) return;
  installed = true;
  Vue.component('Tabs', WTabs);
  Vue.component('TabItem', WTabItem);
}