# vue-tab-simplify

vue tab组件

> 试了很多tab组件限制都比较大，而且很多无用功能, 此组件只负责基本逻辑，值的双向绑定及相关动画，具体样式自行设置，可操作空间比较大

安装： 
```
yarn add vue-tab-simplify
//or
npm install vue-tab-simplify
```
使用方法：

```javascript
全局加载
import tab from 'vue-tab-simplify';
Vue.use(tab);

// or
按需引入
import {WTabs, WTabItem} from 'vue-tab-simplify';

components: {
  WTabs, WTabItem
}
```

```html
<WTabs @on-index-change='tabIndexChange'>
  <WTabItem @on-item-click="onItemClick">首页</WTabItem>
  <WTabItem @on-item-click="onItemClick" :selected='true'>详情</WTabItem>
  <WTabItem @on-item-click="onItemClick">关于我们</WTabItem>
  <WTabItem @on-item-click="onItemClick">其他</WTabItem>
  <WTabItem @on-item-click="onItemClick">哔哩哔哩</WTabItem>
</WTabs> 
```
#### 样式及动画效果均可通过css 自行设置
## WTabs
  ##### props:
  
  | props | description |
  | ------- | -------|
  | scrollThreshold | tab数量大于多少时启用滚动模式，启用时会自动定位，如不需要不要设置会造成不必要的计算 |
  | lineStyle | 选中线的样式 |


  ##### event:
  
  | props | description |
  | ------- | -------|
  | on-index-change | 选中值改变后回调 |
  | on-before-index-change | 选中值改变前的回调 |

## WTabItem
  ##### props
  
  | props | description |
  | ------- | -------|
  | activeClass | 选中item的类名  |
  | disabled | 禁止操作 |

  ##### event:
  
  | props | description |
  | ------- | -------|
  | on-item-click | 点击事件 |

# Keywords
  
  Vue tab component

# License

  ISC
