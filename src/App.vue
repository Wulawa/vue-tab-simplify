<template>
  <div id="app">
    <WTabs @on-index-change='tabIndexChange'>
      <WTabItem @on-item-click="onItemClick">首页</WTabItem>
      <WTabItem @on-item-click="onItemClick" :selected='true'>详情</WTabItem>
      <WTabItem @on-item-click="onItemClick">关于我们</WTabItem>
      <WTabItem @on-item-click="onItemClick">其他</WTabItem>
      <WTabItem @on-item-click="onItemClick">哔哩哔哩</WTabItem>
    </WTabs> 
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import {WTabs, WTabItem} from '../libs';

export default {
  name: 'app',
  components: {
    WTabs, WTabItem
  },
  methods: {
    onItemClick(item) {
      console.log(item);
    },
    tabIndexChange(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
