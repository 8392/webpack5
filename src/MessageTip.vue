<template>
  <el-popover trigger="manual" placement="top" width="260" v-model="oneShow">
    <p class="tip">{{ name }}</p>
    <span class="slotDiv" slot="reference">
      <slot></slot>
    </span>
  </el-popover>
</template>

<script>
export default {
  props: ["name", "show"],
  data() {
    return {
      oneShow: false,
    };
  },
  watch: {
    show(val) {
      this.oneShow = val;
      setTimeout(() => {
        this.oneShow = false;
        this.$emit("update:show", false);
      }, 1000);
    },
  },
  methods: {
    openOne1() {
      console.log("openOne1");
      this.oneShow = true;
      setTimeout(() => {
        this.oneShow = false;
        this.$emit("update:show", false);
      }, 2000);
    },
    openOne() {
      setTimeout(() => {
        this.oneShow = true;
      }, 0);
      // setTimeout(() => {
      //   this.oneShow = false;
      // }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.tip {
  color: #f00;
}
.slotDiv {
  //   float: left;
  display: inline-block;
}
</style>
