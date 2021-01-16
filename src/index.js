import style from './index.scss'
import Test from './test.js'
import imgUrl from './img/timg.jpg'

const app = document.getElementById('app')

const img = new Image()
img.src = imgUrl

app.append(img)

const div = document.createElement('div')
div.classList = style.active


app.append(div)

app.innerHTML = '<div class="iconfont icon-check-item"></div>'
// console.log(999666)