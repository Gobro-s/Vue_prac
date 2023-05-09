<template>
  <div>
    <!-- <h1>hello, {{ $route.params.userName }}</h1> 이렇게는 잘 안쓰고 -->
    <h1>hello, {{ userName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloView',
  // 이렇게 많이 씀
  data() {
    return {
      userName: this.$route.params.userName
    }
  }
}
</script>

<style>

</style>