<template>
  <div class="about">
    <div @click="handleClick">点击</div>
    <Test />
    <div class="list" :key="index" v-for="(item, index) in list">
      <el-popover placement="top" width="260" :value="item.isShow">
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
    <MessageTip
      :show.sync="item.isShow"
      :key="index"
      name="这是一段内容这是一段内容确定删除吗？"
      v-for="(item, index) in list"
    >
      <el-button @click="openOne1(index)">删除</el-button>
    </MessageTip>
  </div>
</template>

<script>
// import Test from "../components/Test";
const Test = () => import(/*webpackChunkName: "test"*/ "../components/Test");
import MessageTip from "./MessageTip";
export default {
  components: { Test, MessageTip },
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
    openOne1(index) {
      // this.isShow = true;
      this.list.map((curr, cId) => {
        curr.isShow = false;
        if (cId === index) {
          curr.isShow = true;
        }
      });
    },
    openOne() {
      setTimeout(() => {
        // this.oneShow = true;
      }, 0);
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
.tip {
  color: #f00;
}
</style>
