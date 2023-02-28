// any 任何类型 谨慎使用
// 有优点也有缺点
let h = 123;
h = true;
h = `123`;
h = {};
h = [];
let newArr = [`1`, 2, true];
let newArr1 = [100, `1`, 2, true];
console.log(newArr1[0].split('')); // any 的缺点， number 类型不能用 字符串类型的方法
