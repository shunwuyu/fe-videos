var a = {
  name: "Cherry",
  fn: function(b, c) {
    console.log(this.name, b, c);
  }
}

var b = a.fn;
// 函数运行时内部this的指向为a
// b.apply(a, [1, 2]);
b.call(a, 1, 2);