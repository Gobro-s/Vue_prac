<template>
  <div>
    <h1>점심 메뉴 추천</h1>
    <button @click="getLunch">점메추</button>
    <hr>
    <p v-if="lunch"> 오늘의 점심은 {{ lunch }}입니다.</p>

    <p v-if="lottoNumber.length">오늘 산 로또 번호 : {{ lottoNumber }}</p>
  </div>
</template>

<script>
import lodash from 'lodash'

export default {
  name: 'MyLunch',
  data () {
    return {
      lunchMenu: ['짜장면', '삼겹살', '초밥'],
      lunch: ''
    }
  },
  // props: {
  //   // 부모로 부터 받는 부분
  //   // JS 이기 때문에 kebab이 아닌 Camel
  //   lottoNumber: Array,
  // },

  methods: {
    getLunch () {
      // 메뉴를 뽑자
      this.lunch = lodash.sample(this.lunchMenu)

      // 부모로 lunch 를 전달하자!!
      this.$emit('lunch-menu', this.lunch)
    }
  }
}
</script>

<style>

</style>