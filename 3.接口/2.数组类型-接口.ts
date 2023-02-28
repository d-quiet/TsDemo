// 不常用
interface INewArray {
    [index: number]: number;    // 任意属性，index 表示的是数组中的下标
}
// [1,2,3] arr[0] --> obj['name']
let arr: INewArray = [1, 3, 4]