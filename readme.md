#ES6 实战 Tutorial
### 简述
  这是一个简单的tutorial，旨在学习认识ES6。教程中会设计到一些基础理论知识，再此不做过多讲解。Tutorial的目的在于串联ES6中的语法特性，从而得到对知识的深入理解。
  制作一个简单的按揭计算器，通过输入贷款金额、年份、利率获取一个明细表。
  哪我们会涉及哪些知识呢？
  EMAScript6、Gulp、Webpack等
  ----我们不生产知识、只做知识的搬运工。
##1) let 变量 let Variables
let是ES6 用来声明变量的，用法类似于var，但是let所声明的变量，只在let所在的代码块内有效。
首先我们需要一个html文件，用编辑器新建一个index.html文件和一个./js/main.js文件，准备开始我们的项目。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>按揭计算机</title>
    <link rel="stylesheet" href="./css/main.css">
  </head>
  <body>
    <div class="header">
      按揭计算器
    </div>
    <div class="table">
      <div class="row">
        Principal: <span><input type="text" id='principal' class="input"></span>
      </div>
      <div class="row">
        Years: <span><input type="text" id='years' class="input"></span>
      </div>
      <div class="row">
        Rate: <span><input type="text" id='rate' class="input"></span>
      </div>
      <div id="submit" class="button">Calculate</div>
    </div>
    <div id="Payment">
    </div>
    <script type="text/javascript" src='./js/main.js'></script>
  </body>
</html>
```
打开你的编辑器我们先在 ./js/main.js 文件里写入一个方法。暂定方法名叫做calculateMonthlyPayment。我们需要给calculateMonthlyPayment番薯配置三个参数，分别是页面中需要输入的principal、year、rate

```javascript
var calculateMonthlyPayment = function (principal, year, rate) {
  if(rate){
    var monthlyRate = rate/100/12
  }
  var monthluPayment = (principal * monthlyRate)/(1-(Math.pow(1/(1 + monthlyRate), years * 12)))
  return monthluPayment
}
document.getElementById('submit').addEventListener('click', function () {
  var principal = document.getElementById('principal').value
  var years = document.getElementById('years').value
  var rate = document.getElementById('rate').value
  var monthlyPayment = calculateMonthlyPayment(principal, years, rate)
  document.getElementById('Payment').innerHtml = monthlyPayment
})
```
好吧，这个函数看起来没有什么别特的。请注意这里有三个var声明的变量，用let替换所有的var，这样我们的js文件就包含了ES6啦。
##2) 变量的解构 Destructuring
ES6的新语法，使得创建对象变得更加容易。我们再次打开 ./js/main.js，修改calculateMonthlyPayment的返回值
```javascript
return {principal,year,rate,monthluPayment,monthlyRate}
```

*ES6允许按照一个模式，从数组和对象中提取值，对变量进行赋值，这被称之为结构(Destructuring)*

然后我们修改一下调用calculateMonthlyPayment方法的地方
```javascript
let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, year, rate)
```
*函数只能返回一个真，如果要返回多个值，只能将他们放在数组或者对象中返回，有了解够赋值取出来这些赋值就非常方便*

##3) 函数的扩展 箭头函数 Arrow Functions
*ES6 允许使用箭头(=>)定义函数*
```javascript
var f = v =>v
```
上面箭头函数等价于
```javascript
var f = function (v) {
  return v
}
```
我们再次编辑 ./js/main.js 文件,把function去掉用=>进行替换。
```javascript
var calculateMonthlyPayment = function (principal, years, rate) {
var calculateMonthlyPayment = (principal, years, rate) => {
```
是时候，修改一下 ./js/main.js 紧接着我们写一个 calculateAmortization 方法当然啦，还是要用箭头定义的。
分别这只principal, years, rate这三个参数，并在函数内调用calculateMonthlyPayment对结果进行进一步计算。
```javascript
let calculateAmortization = (principal, years, rate) => {
  let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate)
  let balance = principal
  let amortization = []
  for (let y = 0; y < years; y++) {
    let interestY = 0
    let principalY = 0
    for (let m = 0; m < 12; m++) {
      let interestM = balance * monthlyRate
      let principalM = monthlyPayment - interestM
      interestY = interestY + interestM
      principalY = principalY + principalM
      balance = balance - principalM
    }
    amortization.push({principalY, interestY, balance})
  }
  return {monthlyPayment, monthlyRate, amortization}
}
```
修改calculateMonthlyPayment调用的地方。
```javascript
let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate)
```
ok~~我们的Tutorial基本完成了。
##4) ES6里的Fetch
首先我们先要从XMLHttpRequest开始谈起，XMLHttpRequest作为了当前WEB应用与远程资源进行通信的基础，本段介绍的内容则是XMLHttpRequest的替代技术Fetch API。
Fetch API 提供了一个fetch()方法，可以使用它来发起远程资源请求，并返回一个Promise对象，让我们能够对请求的返回结果进行检索，
```javascript
function fetch () {
  fetch(url).then(function (response) {

  }).then(function (json) {

  })

```
首先构造请求的URL，然后将对URL传递给全局的fetch()方法，他会立刻返回一个Promise，当Promise被通过，他就会返回一个Response对象，通过该对象的json()方法就可以将结果作为JSON对象返回。同样response.json()会返回一个Promise对象，因此在我们的例子中可以继续链接一个then()方法。
为什么要替代XMLHttpRequest？
对于传统的XMLHttpRequest而言，你必须使用它的一个实例来执行请求和检索返回的响应，但是通过Fetch API我们还能明确配置的请求对象。通过Request构造器函数创建一个新的请求，第一个参数是请求的url，第二个参数是选项用于配置请求
```javascript
var req = new Request(URL, {method: 'GET', cache: 'reload'});
fetch(req).then(function(response) {
  return response.json()
}).then(function(json) {
  insertPhotos(json)
});
```
Fetch 常见坑
Fetch 请求默认不带cookie，需要设置 fetch(url, {credentials: 'include'})
##4) 使用 Gulp 对代码进行转换压缩
首先我们新建一个gukofile.js文件将其存放在根目录下。
安装全局gulp和项目开发依赖的devDependencies
```javascript
npm install --global gulp
npm install --save-dev gulp
```
安装完成之后打开gukofile.js文件
```javascript
var gulp = require('gulp')
gulp.task('default', function () {
  // 这里写任务
})
```
然后我们继续安装gulp的包 gulp-rename，gulp-uglify，gulp-es6-transpiler，cssnano
分别是处理重命名、压缩js、es6转换es5、cs压缩任务
```javascript
npm install gulp-rename
npm install --save-dev gulp-uglify
npm npm install --save-dev gulp-es6-transpiler
npm install cssnano
```
```javascript
var gulp = require('gulp')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var es = require('gulp-es6-transpiler')
gulp.task('js', ['transpiler'],function () {
  return gulp.src('dist/*.js')
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest('./resource'))
})
gulp.task('transpiler', function () {
  return gulp.src('./js/main.js')
  .pipe(es())
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest('./resource/'))
})
gulp.task('default', ['transpiler','js'])
```
未完待续
