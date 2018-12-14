<style>
.w_tabs{
  display: flex;
  height: 40px;
  line-height: 40px;
  position: relative;
  white-space: nowrap;
}
.tab-ink-bar{
  position: absolute;
  left: 0;
  bottom: 0;
}
.ink_inner{
  height: 3px;
  background: linear-gradient(to right, #f67373, #fe9874);
  border-radius: 3px;
  width: 20px;
  margin: 0 auto;
}
.scrollable {
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: content-box;
}

.scrollable::-webkit-scrollbar {
  display: none;
}
</style>
<template>
  <div :class="['w_tabs', {scrollable}]">
    <slot></slot>
    <div class="tab-ink-bar" :style="inkStyle">
      <div class="ink_inner" :style='lineStyle'></div>
    </div>
  </div>
</template>
<script>
  import { parentMixin } from './multi-items.js'

  export default{
    name: 'WTabs',
    mixins: [parentMixin],
    props: {
      scrollThreshold: {
        type: [Number, Boolean],
        default: false
      },
      lineStyle: {
        type: Object,
        default: () => ({
          width: '40%',
        }),
      },
    },
    computed: {
      inkStyle() {
        const index = this.currentIndex;
        const defaultStyle = {
          transition: 'all 200ms cubic-bezier(0.35, 0, 0.25, 1)',
          transform: 'translate3d(0,0,0)',
        } 
        if(index > -1 && this.$children[index]){
          const width = this.$children[index].$el.clientWidth;
          const left = this.$children[index].$el.offsetLeft;
          defaultStyle.width = width + 'px';
          defaultStyle.transform = `translate3d(${left}px,0,0)`;
        }
        return defaultStyle;
      },
      scrollable () {
        return this.scrollThreshold && this.number > this.scrollThreshold
      }
    },
    watch: {
      currentIndex(newVal) {
        if(!this.scrollable) return;
        const parent = this.$el;
        const child = this.$children[newVal].$el;
        if(parent.scrollLeft > child.offsetLeft) {
          parent.scrollLeft = child.offsetLeft;
        } else if(parent.scrollLeft + parent.clientWidth < child.offsetLeft + child.clientWidth) {
          parent.scrollLeft = (child.offsetLeft + child.clientWidth) - parent.clientWidth;
        }
      }
    }
  }
</script>