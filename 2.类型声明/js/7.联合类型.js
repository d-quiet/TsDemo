// 表示取值可以为多种类型的一种
// flag：true，1     false，2
let f = true;
f = 1; // 再次赋值时，走类型推断，给变量定义一个类型
f = false;
f = `123`;
console.log(f.split(''));
