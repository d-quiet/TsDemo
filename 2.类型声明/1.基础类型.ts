let num: number = 10
num = 1500
function abc(a: string) {
    console.log(a);
}
abc(`123`)

// 类型声明 指定ts变量（参数、形参）的类型  Ts编译器 自动检查
// 类型声明给变量设置了类型，使变量只能存储某种类型的值

// 布尔类型 boolean
let flag: boolean = false
flag = true

// 数字类型 number 支持任意进制数字
let a: number = 10       // 十进制
let a1: number = 0B1010  // 二进制
let a2: number = 0o12    // 八进制
let a3: number = 0xa     // 十六进制
a = 11

// 字符串类型 string
let str: string = `a`
str = `asdasd`

// undefined 和 null 实际开发中用的不多
let u: undefined = undefined
let n: null = null
console.log(u);
console.log(n);
// let u = 123
// undefined 和 null 可以作为其他类型的子类型
// 可以把 undefined 和 null 赋值给其他类型的变量
let b: number = undefined
let str1: string = null
console.log(b);
console.log(str1);