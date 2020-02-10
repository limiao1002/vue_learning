// 基于构造函数创建自定义类(constructor)
// 1.在普通函数执行的基础上“new xxx()”,这样就不是普通函数执行了 而是构造函数执行
// 当前的函数名称之为“类名”，接收的返回结果是当前类的一个实例
// 2.自己创建的类名，最好第一个单词首字母大写
// 3.这种构造函数设计模式执行，主要用于组件、类库、插件、框架等的封装，平时编写业务逻辑一般不这样处理。
function Fn(){

}
var f = new Fn(); // =>Fn是类，f是类的一个实例
var f2=new Fn();//f2也是Fn的一个实例，f2和f是独立分开的，互不影响。
console.log(f);

// JS中创建值有两种方式
// 1.字面量表达式
// 2.构造函数模式
// var obj = {} //字面量方式
// var obj = new Object() //构造函数模式
// 不管是哪一种方式创造出来的都是Object类的实例，而实例之间是独立分开的，
// 所以var xxx = {} 这种模式就是JS中的单例模式

// 基本数据类型基于两种不同的模式创建出来的值是不一样的
// 基于字面量方式创建出来的值是基本类型值
// 基于构造函数创建出来的值是引用类型
// num2是数字类的实例，num1也是数字类的实例，它只是JS表达数字的方式之一，都可以使用数字类提供的属性和方法。
// var num1 = 12;
// var num2 = new Number(12);
// console.log(typeof num1);//"number"
// console.log(typeof num2);//"object"

function fn(){

}

//普通函数执行 fn();
// 1.形成一个私有的作用域
// 2.形参赋值
// 3.变量提升
// 4.代码执行
// 5.栈内存释放问题

function Fn1(name,age){
  var n = 19;
  this.name = name;
  this.age = age + n;
}

// 构造函数执行
// 1.像普通函数执行一样，形成一个私有的作用域（栈内存）
// 形参赋值  变量提升 都属于私有变量。
// 2【构造函数执行独有】在js代码自上而下执行之前，首先在当前形成的私有栈中创建一个对象（创建一个堆内存 暂时不存储任何的东西），并且让函数中的执行主体（this）指向这个新的堆内存（this===创建的对象）
// 3.代码自上而下执行
// 4.【构造函数执行】代码执行完成，把之前创建的堆内存地址返回（浏览器默认返回）

// 也就是开始创建的对象其实就是当前Fn这个类的一个实例，我们让this指向这个实例，代码执行中的this.xxx =xxx 都是给实例设置“私有属性” 最后浏览器会把默认创建的实例返回 共外码接收
// 再次执行new Fn1,就是把上面的操作克隆一份，会形成新的实例（新的内存空间） 所以说实例时独立分开的


function fn0(){
  var n = 10; 
  this.m = m
  return;//这样return是结束代码执行的作用，并且不会覆盖返回的实例。
  console.log(1)
}
var f = new fn0();//=>new fn0;在构造函数执行的时候，如果Fn不需要传递实参，我们可以省略小括号，意思还是创建实例（和加小括号没有区别）
console.log(f.m)
console.log(f.n)

// 构造函数执行，不写return,浏览器会默认返回创建的实例，但是如果我们自己写了return?
// 1.return是一个基本值，返回的结果依然是类的实例，没有收到影响。
// 2.如果返回的是引用值，则会把默认返回的实例覆盖，此时接收到的结果就不在是当前类的实例了。

// 构造函数执行的时候，尽量减少return的使用，防止覆盖实例

// ① instanceof:检测某一个实例是否隶属于这个类
// console.log(f instanceof fn0);// true
// console.log(f instanceof Array);//false
// console.log(f instanceof Object)//true(万物皆对象 所有的对象 包含创建的实例都是Object的实例)
// ②in:检测当前对象是否存在某个属性（不管当前这个属性是对象的私有属性还是公有属性，只要有结果就是true）
// console.log("m" in f)//true
// console.log("n" in f)//false
// console.log("toString" in f);//true toString是它的公有属性
// ③hasOwnProperty:检测当前属性是否为对象的私有属性（不仅要有这个属性，而且必须是私有的才可以）
// console.log(f.hasOwnProperty("m"))//true
// console.log(f.hasOwnProperty("n"))//false 连这个属性都没有
// console.log(f.hasOwnProperty("toString"))//false 公有属性

// 思考题：编写一个方法hasPubProperty 监测当前属性是否为对象的公有属性，和hasOwnProperty对应
// function hasPupProperty(obj,attr){

// }
