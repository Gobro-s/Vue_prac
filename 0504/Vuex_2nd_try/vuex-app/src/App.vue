// App.vue

<template>
  <div id="app">
    <p>Counter: {{ counter }}</p>
    <p>Counter x2: {{ counterDouble }}</p>
    <p></p>
    <button @click="increase">increase +</button>
    <button @click="decrease">decrease -</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  // data: function() {
  //   return {
  //     counter: 0,
  //   }
  // },
  
  // methods: {
  //   increase: function () {
  //     this.counter += 1
  //   },
  //   decrease: function () {
  //     this.counter -= 1
  //   },
  // },
  computed: {
    count() {
      return this.$store.state.counter
    },
  },
}
</script>

<style>
</style>







<!--<template>
  <div id="app">
    <h1>{{ $store.state.message }}</h1>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
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
-->