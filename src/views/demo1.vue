<template>
  <div>
    <div v-for="(item,index) in data" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'demo1',
  data () {
    return {

    }
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  created () {
    console.log('3data', this.data)
  }
}
</script>

<style>
</style>