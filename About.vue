<template>
  <div class="about">
    <div @click="handleClick">点击</div>
    <Test v-if="isShow" />
    <div class="list" :key="index" v-for="(item, index) in list">
      <el-popover placement="top" width="160" :value="item.isShow">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="closeMeth(index)">取 消</el-button>
          <el-button type="primary" size="mini" @click="closeMeth(index)"
            >确 定</el-button
          >
        </div>
        <el-button slot="reference" @click="opeMeth(index)">删除</el-button>
      </el-popover>
    </div>
    <el-popover placement="top" width="160" :value="oneShow">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="closeOne">取 消</el-button>
        <el-button type="primary" size="mini" @click="closeOne">确 定</el-button>
      </div>
      <el-button slot="reference" @click="openOne">删除</el-button>
    </el-popover>
    <el-button slot="reference" @click="openOne">打开</el-button>
  </div>
</template>

<script>
// import Test from "../components/Test";
const Test = () => import(/*webpackChunkName: "test"*/ "../components/Test");
export default {
  components: { Test },
  data() {
    return {
      oneShow: false,
      visible: false,
      isShow: false,
      list: [
        {
          isShow: false,
          name: "成都",
        },
        {
          isShow: false,
          name: "北京",
        },
        {
          isShow: false,
          name: "重庆",
        },
      ],
    };
    // eslint-disable-next-line prettier/prettier
  },
  methods: {
    closeOne() {
      this.oneShow = false;
    },
    openOne() {
      setTimeout(() => {
        this.oneShow = true;
      }, 0);
      setTimeout(() => {
        this.oneShow = false;
      }, 1000);
    },
    handleClick() {
      this.isShow = !this.isShow;
      // eslint-disable-next-line prettier/prettier
    },
    closeMeth(index) {
      this.list.map((curr, cId) => {
        if (cId === index) {
          curr.isShow = false;
        }
      });
    },
    opeMeth(index) {
      setTimeout(() => {
        this.list.map((curr, cId) => {
          curr.isShow = false;
          if (cId === index) {
            curr.isShow = true;
          }
        });
      }, 0);
    },
    // eslint-disable-next-line prettier/prettier
  },
};
</script>

<style lang="scss" scoped>
// @import "../other.scss";
.list {
  background: #ccc;
  float: left;
}
</style>
