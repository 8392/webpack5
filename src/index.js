// import "@babel/polyfill";
import './font/iconfont.css';
// import 'style-loader!css-loader!./font/iconfont.css';
// import style from './index.scss'
import './index.css'
import _ from 'lodash'
import $ from 'jquery'

// import './index.scss'
// import Test from './test.js'
const Test = () => import("./test.js")

// console.log("Test", Test())

// Test().then((res) => {
//   console.log("aa", res)
// })


$('.box').css({
  background: '#ccc'
})

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);

document.addEventListener('click', async () => {
  // import("./test.js").then((res) => {
  //   // console.log("你好啊", res.default)
  //   res.default()
  //   // res()
  // })
  // Test().default()
  // console.log(Test())
  const res = await Test()
  res.default()
})


import imgUrl from './img/timg.jpg'

const app = document.getElementById('app')

const img = new Image()
img.src = imgUrl

app.append(img)

const div = document.createElement('div')
// div.classList = style.active
div.classList = 'item'

app.append(div)

app.innerHTML = '<div class="iconfont icon-lipao">ccccc</div>'


const esFn = () => {
  const res = 66
  return new Promise((resolve, reject) => {
    resolve("输出promise" + res)
  })
}

// const res = esFn().

// console.log("res",)

esFn().then((res) => {
  console.log("res", res)
})



// if(module.hot) {  // 监听js变化，启动热更新，css里面有loader
//   module.hot.accept('./test', () => {
//     Test()
//   })
// }
