var name = "windowsName"; //window
var a = {
  name: "Cherry",
  fn: function() {
    console.log(this.name);
  }
}

a.fn(); //Cherry
var b = a.fn;
// console.log(typeof (b));
// b(); //普通函数来运行的
// b.apply(a);
b.call(a);