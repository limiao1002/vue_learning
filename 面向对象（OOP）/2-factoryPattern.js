// 工厂模式(factory pattern)
// 1.把实现相同功能的代码进行“封装”，以此来实现“批量生产”
// 2."低耦合 高内聚" 减少页面中的冗余代码，提高代码的重复使用率
function createPerson(name,age){
  var obj = {};
  obj.name=name;
  obj.age = age;
  return obj;
}
var p1=createPerson('张三',32);
var p2=createPerson('李四',22);
