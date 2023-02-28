// any 任何类型 谨慎使用
let h: any = 123
h = true
h = `123`
h = {}
h = []
let newArr: any[] = [`1`, 2, true]
let newArr1: Array<any> = [100, `1`, 2, true]
console.log(newArr1[0].split(''));   // any 的缺点， number 类型不能用 字符串类型的方法