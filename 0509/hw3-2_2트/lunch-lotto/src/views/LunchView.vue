<template>
  <div class="lunch">
    <HelloWorld msg="점심 메뉴"/>
    <button @click="getLunch">Pick Lunch</button>
    <br>
    <p v-if="lunch">{{ lunch }}</p>
    <br><br>
    <h2>로또를 뽑아보자</h2>
    <button @click="pickLotto">Pick Lotto</button>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import lodash from 'lodash'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      lunchMenu:['자장면', '삼겹살', '초밥', '국밥', '치킨', '짬뽕', '소고기', '볶음밥', '냉면', '햄버거', '피자'],
      lunch: ''
    }
  },
  methods :{
    getLunch () {
      // 메뉴를 뽑자
      this.lunch = lodash.sample(this.lunchMenu)

      // 부모로 lunch 를 전달하자!!
      this.$emit('lunch-menu', this.lunch)
    },
    pickLotto() {
      this.$router.push({ name: 'lotto'})
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-weight: bold;
  color: #2c3e50;
}
</style>
