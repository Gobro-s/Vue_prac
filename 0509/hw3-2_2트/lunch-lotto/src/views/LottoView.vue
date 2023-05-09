<template>
  <div class="lotto">
    <h1>로또</h1>
    <button @click="getLuckyNumbers">Get Lucky Numbers</button>
    <p v-if="lottoNumber.length">{{ lottoNumber }}</p>
  </div>
</template>

<script>
import lodash from 'lodash'

export default {
  name: 'LottoView',
  data() {
    return {
      lottoNumber: [],
      lunch: '',
    }
  },
  methods: {
    getLuckyNumbers() {
      const numbers = lodash.range(1, 46)
      this.lottoNumber = lodash.sampleSize(numbers, 6)
    }
  }
}
</script>