<style>
.w_tab_item{
  padding: 0 5px;
  color: #9098a8;
}
.w-tab-selected{
  color: #2b313c;
}
.w-tab-disabled{
  color: #9ea2a9;
  pointer-events: none;
}
</style>
<template>
  <div
  :class="['w_tab_item', currentSelected ? activeClass : '', {
    'w-tab-selected': currentSelected,
    'w-tab-disabled': disabled 
  }]"
  @click="onItemClick"
  >
    <slot></slot>
  </div>
</template>
<script>
  import { childMixin } from './multi-items.js'

  export default {
    name: 'tabItem',
    mixins: [childMixin],
    props: {
      activeClass: String,
      disabled: Boolean,
    },
    data(){
      return {

      }
    }
  }
</script>