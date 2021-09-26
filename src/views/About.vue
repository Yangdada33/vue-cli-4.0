<template>
  <div class="about">
    <div
      class="box"
      v-for="(item,index) in cities"
      :key="index"
      @click="change(index)"
      :class="{'show':arr.includes(index)}"
    >{{item}}</div>

    <button @click="click">点击</button>

    <Demo />
  </div>
</template>

<script>
import Demo from './demo.vue'
export default {
  components: { Demo },
  data () {
    return {
      cities: ["上海", "北京", "广州", "重庆", "西安"],
      arr: [],
    }

  },
  methods: {
    change (i) {
      if (this.arr.includes(i)) {
        this.arr = this.arr.filter((ele) => ele != i);
      } else {
        this.arr.push(i);
      }
    },
    click () {
      let newarr = []
      if (this.arr.length > 0) {
        this.arr.forEach(i => {
          newarr.push(this.cities[i])
        })
      } else {
        console.log('22222');
      }
      console.log('1-->', newarr);

      this.$store.commit('app/setmessage', newarr)
    }
  }
};
</script>

<style>
.box {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  background: skyblue;
  cursor: pointer;
}

.show {
  background: tomato;
  color: blue;
}
</style>