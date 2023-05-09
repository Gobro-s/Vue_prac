<template>
  <div id="app">
    <!-- 사용하기 -->
    <MyLotto />
    <MyLunch />
  </div>
</template>

<script>
import MyLotto from '@/components/MyLotto'  // 1. 불러오기 (@: src 폴더)
import MyLunch from '@/components/MyLunch'

export default {
  name: 'App',
  components: {
    MyLotto,     // 2. 등록하기 // 축약형으로 표현
    MyLunch,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
