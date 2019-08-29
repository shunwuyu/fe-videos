// 类 抽象， 实例化 对象
// JS 没有类， 只有对象 基于原型式
// prototype __proto__
// 抽象 
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log('My name is ${this.name} . Am I human ? ${this.isHuman}');
  }
}
const me = Object.create(person);
// console.log(me.__proto__);