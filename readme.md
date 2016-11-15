#ES6 实战 Tutorial

##let 变量
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
    <script type="text/javascript" src='./js/main.js'></script>
  </body>
</html>
```
打开你的编辑器我们先在./js/main.js文件里写入一个方法。暂定方法名叫做calculateMonthlyPayment

```javascript
var calculateMonthlyPayment = function () {

}
```
