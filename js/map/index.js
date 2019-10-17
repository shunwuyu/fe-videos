// ES6新增了两种数据结构  Set 去重的数组(集合)
// Map (映射 HashMap) WeakMap  WeakSet
const w = new Map();
function f(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (w.has(n)) {
    return w.get(n);
  }
  //递归公式
  let ret = f(n-1) + f(n-2);
  w.set(n, ret);
  return ret;
}