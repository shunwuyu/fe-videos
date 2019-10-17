function simpleClone(initialObj) {
  var obj = {};
  for (var key in initialObj) {
    obj[key] = initialObj[key];
  }
  return obj;
}

var obj = {
  a: "hello",
  c: ["Bob", "Tom", "Jenny"]
}

var cloneObj = simpleClone(obj);
cloneObj.a = '你好';
console.log(obj.a);
