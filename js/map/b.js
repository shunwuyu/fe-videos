let dog1 = { name: 'Snickers' };
let dog2 = { name: 'Sunny' };

const strong = new Map(); //强映射
const weak = new WeakMap(); //弱映射

// key object 
strong.set(dog1, 'Snickers is the best!');
weak.set(dog2, 'Sunny is the 2nd best!');

for ([key, val] of strong) {
  console.log(key, val);
}

console.log(weak.get(dog2));
dog1 = null; //垃圾回收 对象 ，
dog2 = null;


for ([key, val] of strong) {
  console.log(key, val);
}
console.log(weak.get(dog2));
