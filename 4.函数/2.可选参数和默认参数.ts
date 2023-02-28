let getName = function (x: string = `李`, y?: string, z: string = `你好`): string {
    return x + y + z
}
// 可选参数 ？必选参数不能位于可选参数后面
// 默认参数 = 可以放在可选参数和必选参数之后
console.log(getName(`马六`))