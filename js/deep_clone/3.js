var obj = {a: {a:"hello", b:21}};
var initialObj = Object.assign({}, obj);
console.log(initialObj);
initialObj.a.a = 'changed';
console.log(obj.a.a);