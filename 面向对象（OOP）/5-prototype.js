// 原型（prototype）、 原型链（_proto_）
// [函数]
//   普通函数、类（所有的类：内置类、自己创建的类）（Array,Date是函数）
// 【对象】
//   普通对象、数组、正则、Math、arguments...
//   实例时对象类型的（除了基本类型的字面量创建的值）
//   prototype的值也是对象类型的
//   函数也是对象类型的。。。
//   万物皆对象

//   1、所有的函数数据类型都天生自带一个属性：prototype(原型)，这个属性的值是一个对象，浏览器会默认给它开辟一个堆内存。
//   2、在浏览器给prototype开辟的堆内存中有一个天生自带的属性：constructor,这个属性存储的值是当前函数本身
//   3、每一个对象都有一个__proto__的属性,这个属性指向当前实例所属类的prototype(如果不能确定它是谁的实例，都是Object的实例).

//   每一个类都把供实例调取的公共属性方法，存储到自己的原型上（原型prototype的作用就是存储一些公共的属性和方法，供它的实例调取使用）
//   基类Object的原型上的__proto__指向Null，因为到最底层类，如果要指向也是指向自己本身，没意义。

//   原型链：它是一种基于__proto__向上查找的机制，当我们操作实例的某个属性或者方法的时候，首先找自己空间中私有的属性或者方法
//   1.找到了，则结束查找，使用自己私有的即可。
//   2.没有找到，则基于__proto__找所属类的prototype,如果找到就用这个公有的，如果没有找到，基于原型上的__proto__继续向上查找，一直找到Object.prototype的原型为止，
//   如果没有，操作的属性或者方法不存在。

function Fn(){
  var n = 100;
  this.AA = function(){
    console.log('AA[私]')
  }
  this.BB = function(){
    console.log('BB[私]')
  }
}
Fn.prototype.AA = function(){
  console.log('AA[公]')
}

var f1 = new Fn;
var f2 = new Fn;

console.log(f1.n)//undefined
console.log(f1.AA === f2.AA) //false  f1.AA和f2.AA都是私有的
console.log(f1.__proto__.AA=== f2.__proto__.AA);//true
console.log(f1.__proto__.AA===Fn.prototype.AA)//true
console.log(f1.hasOwnProperty===Fn.prototype.hasOwnProperty)//true

f1.name = "xxx";//给自己设置私有属性
f1.__proto__.name="xxx"//给原型上设置公有属性（每个实例都可以用这个属性）