<template>
  <div id="app">
    <h1>길이 {{ messageLength }}의 메시지 {{ msg }}를 입력받음</h1>
    <h3>x2 : {{ doubleLength }}</h3>
    <!-- <input type="text" @keyup.enter="changeMessage" v-model="inputData"> -->
    <!-- mapActions는 아래처럼 사용 -->
    <input type="text" @keyup.enter="onSubmit" v-model="inputData" />
    <h2>{{ level }}</h2>
    <button @click="uplevel">levelup</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  created() {
    // this.$store.dispatch("loadMessage"),
    console.log(this.$store);
  },
  computed: {
    // message() {
    //   return this.$store.state.message
    // },
    // 위의 세 줄과 아래 한 줄은 같은 일을 하는 코드
    // 배열의 형태 (같은 이름)
    ...mapState(["age"]),
    // 다른이름으로 쓰려면
    ...mapState({
      msg: (state) => state.message,
      level: (state) => state.myModule.level,
    }),
    // messageLength() {
    //     return this.$store.getters.messageLength
    // },
    // doubleLength() {
    //     return this.$store.getters.doubleLength
    // },
    ...mapGetters(["messageLength", "doubleLength"]),
  },
  data() {
    return {
      inputData: null,
    };
  },
  methods: {
    // changeMessage() {
    //   const newMessage = this.inputData
    //   this.$store.dispatch('changeMessage', newMessage)
    //   this.inputData = null
    // },
    // 위의 changeMessage()와 아래 mapActions는 같은 기능을 함
    // ...mapActions(['changeMessage']),

    // inputData가 입력 후 초기화 되도록 하려면 객체로 사용
    ...mapActions({
      actionsChangeMessage: "changeMessage",
      uplevel: "incrementLevel",
    }),
    onSubmit() {
      const newMessage = this.inputData;
      this.actionsChangeMessage(newMessage);
      this.inputData = null;
    },
    //아래 코드를 바꿔서 쓰면 60번째 줄의 코드가 된다.
    // uplevel() {
    //   this.$store.dispatch('incrementLevel')
    // }
  },
};
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
