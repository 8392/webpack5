<template>
  <div>
    <div class="btn" @click="open">展开</div>
    <div class="content clearfix">
      <div class="main">
        <div class="main-list" :key="index" v-for="(x, index) in list"></div>
      </div>
      <div class="model" v-if="isShow" :style="{ transform: transform }">
        <div class="main main2 clearfix">
          <div class="main-list" :key="index" v-for="(x, index) in list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: new Array(20).fill(6),
      isShow: true,
      top: "-1200px",
      transform: "translateY(-1900px)",
    };
  },
  methods: {
    open() {
      if (this.transform === "translateY(-1900px)") {
        this.transform = "translateY(-200px)";
      } else {
        // this.transform = 0;
        this.transform = "translateY(-1900px)";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.btn {
  width: 70px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #ccc;
  margin: 0 auto;
  margin-bottom: 15px;
  cursor: pointer;
}
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}

.main {
  width: 1000px;
  background: #f1f1f1;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
  .main-list {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    background: rgb(187, 255, 173);
    float: left;
    margin-bottom: 20px;
  }
}
.content {
  position: relative;
  //   overflow: hidden;
}
.model {
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: -3000px;
  margin: auto;
  transform: translateY(-1900px);
  transition: transform 0.5s ease 0s;
}
.main2 {
  overflow: inherit;
  height: auto;
}
</style>
