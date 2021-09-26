<template>
  <div>
    <Demo1 :data="message" />
  </div>
</template>

<script>
import Demo1 from './demo1.vue'
export default {
  name: 'demo',
  components: { Demo1 },
  data () {
    return {

    }
  },

  computed: {
    message () {
      console.log('2vuex');
      return this.$store.getters['app/getMessage'] //获取最新的值
    }
  },
  created () {
    console.log('2.1message', this.message)
  }
}
</script>

<style>
</style>