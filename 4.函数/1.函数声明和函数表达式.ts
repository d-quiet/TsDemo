// 函数声明，命名函数
// function add(a, b) {
//     return a + b
// }

// 函数表达式，匿名函数
// let add1 = function (a, b) {
//     return a + b
// }

// Ts 函数声明，命名函数
// a 和 b 都是 number 类型
function add(a: number, b: number): number {
    //  :number 表示该函数的返回值为 number 类型
    return a + b
}
console.log(add(1, 2))
const c: number = add(1, 5)
console.log(c);
// 函数表达式，匿名函数
let add1 = function (a: number, b: number): number {
    return a + b
}
const d: number = add(5, 5)

// 函数的完整写法
// 箭头左边为参数的类型，箭头右边为返回值的类型
let add3: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b
}