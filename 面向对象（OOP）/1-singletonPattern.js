//单例设计模式（每一个命名空间都是一个单独的实例）
//this
//1.给当前元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的THIS是当前操作的元素对象
// oBox.onclick = function(){
      // this指的oBox
// }
//2.普通函数执行，函数中的THIS取决于执行的主体，谁执行的，this就是谁（执行主体：方法执行，看方法名前面是否有“点”，有的话，点前面是谁 this就是谁，没有点this是window）
//3.自执行函数方法中的this指window 
// ~function(){console.log(this)}()
var n = 2;
var obj = {
  n:3,
  fn:(function(n){
    n*=2;
    this.n+=2;
    var n = 5;
    return function(m){
      this.n*=2;
      console.log(m+(++n))
    }
  })(n)
};
var fn = obj.fn;
fn(3);
obj.fn(3);
console.log(n,obj.n);

// //模块化开发
// var utils = (function(){
//   return {
//     aa:function(){

//     }
//   }
// })()

// var skipRender = (function(){
//   var fn = function(){

//   };
//   return {
//     init:function(){
//     },
//     fn:fn//把本模块中的fn暴露出来
//   }
// })()
// skipRender.init();
// utils.aa();

// var weatherRender = (function(){
//   var fn = function(){

//   };
//   return {
//     init:function(){
//       fn();//调取自己模块中的方法直接调取即可
//       skipRender.fn();//调取别人模块中的方法
//     }
//   }
// })()
// weatherRender.init();


