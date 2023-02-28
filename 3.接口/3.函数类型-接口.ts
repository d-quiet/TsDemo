interface ISearchFn {
    // (参数:类型,...): 返回值的类型
    (a: string, b: string): boolean
}
// 需要约束参数和返回值
const fn1: ISearchFn = function (a: string, b: string): boolean {
    return a.search(b) !== -1
}
console.log(fn1('123', '1'));