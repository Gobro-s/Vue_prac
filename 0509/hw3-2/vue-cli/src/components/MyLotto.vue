<template>
  <div>
    <h1>로또 번호 추천</h1>
    <button @click="getLottoNumber">로또 번호 가져오기</button>
    <hr>
    <p v-if="lottoNumber.length">{{ lottoNumber }}</p>
    <p v-if="lunch">오늘 먹은 점심은 {{ lunch }}</p>
    <hr>

    <div class="border">
      <!-- 부모가 보내는 부분!! --> 
      <MyLunch :lotto-number="lottoNumber" @lunch-menu="getLunchMenu"/>
    </div>
  </div>
</template>

<script>
import lodash from 'lodash'
import MyLunch from '@/components/MyLunch'

export default {
  name: 'MyLotto',
  components: {
    MyLunch,
  },
  data () {
    return {
      // 페이지 에서 사용할 로또 번호
      lottoNumber: [],
      lunch: '',
    }
  },
  methods: {
    getLottoNumber () {
      // 어떤 일을 하면 될까?
      // 1~45 중에서 6개의 숫자를 뽑아서 저장하면 됨
      // lodash 를 사용해서 뽑자
      const numbers = lodash.range(1, 46) // 1~45 까지 숫자 배열
      this.lottoNumber = lodash.sampleSize(numbers, 6)  // 로또 번호 저장
    },
    // 자식에서 전달해오는 데이터를 받자!!
    // getLunchMenu (lunchMenu) {
    //   this.lunch = lunchMenu
    // },
  }
}
</script>

<style>
  .border {
    border: 2px red dashed;
  }
</style>