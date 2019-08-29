// Object.create  返回一个新对象
// 它的原型对象是参数
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log('My name is ${this.name} . Am I human ? ${this.isHuman}');
  }
}
function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

const me = create(person);
console.log(me.__proto__ == person);