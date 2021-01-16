<template>
  <div class="box">
    <div
      class="list"
      @click.stop="handleClick(index)"
      :key="index"
      v-for="(x, index) in list"
    >
      {{ x }}
      <div v-show="currId === index" class="delete" :style="{ opacity: opacity }">
        <div class="triangle_border_down"></div>
        <div @click.stop="deleteMeth(index)">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["成都", "北京", "上海", "重庆"],
      currId: 1,
      opacity: 0,
    };
  },
  mounted() {
    document.addEventListener("click", this.deleteMeth);
  },
  methods: {
    handleClick(index) {
      this.opacity = 1;
      this.currId = index;
      console.log(this.currId);
    },
    deleteMeth() {
      this.currId = "";
      this.opacity = 0;
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.deleteMeth);
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  padding-top: 50px;
  display: flex;
  align-items: center;
}
.list {
  cursor: pointer;
  margin-right: 100px;
  width: 160px;
  height: 205px;
  line-height: 45px;
  background: #ccc;
  position: relative;
}
.delete {
  position: absolute;
  width: 200px;
  height: 100px;
  background: #fff;
  position: absolute;
  left: 50%;
  right: 0;
  top: -120px;
  margin-left: -100px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  word-break: break-all;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  opacity: 1;
  transition: opacity 3s ease 0s;
}

.triangle_border_down {
  border-width: 6px 6px 0;
  border-style: solid;
  border-color: #fff transparent transparent; /*灰 透明 透明 */
  position: absolute;
  left: 50%;
  margin-left: -3px;
  bottom: -6px;
}
</style>
