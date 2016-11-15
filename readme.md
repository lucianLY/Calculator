#ES6 实战 Tutorial

##let 变量 let Variables
let是ES6 用来声明变量的，用法类似于var，但是let所声明的变量，只在let所在的代码块内有效。
首先我们需要一个html文件，用编辑器新建一个index.html文件和一个./js/main.js文件，准备开始我们的项目。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>按揭计算机</title>
  </head>
  <body>
    <div class="">
      Principal: <span><input type="text" class='principal'></span>
    </div>
    <div class="">
      Year: <span><input type="text" class='year'></span>
    </div>
    <div class="">
      Rate: <span><input type="text" class='rate'></span>
    </div>
    <button>Calculate</button>
    <h2>Monthly Payment: <span id="monthlyPayment" class="currency"></span></h2>
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
```
好吧，这个函数看起来没有什么别特的。请注意这里有三个var声明的变量，用let替换所有的var，这样我们的js文件就包含了ES6啦。
##变量的解构 Destructuring
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
