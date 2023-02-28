// 它是对行为的抽象，用于对[对象的形状（Shape）]进行描述，理解为一种约束
// 定义接口 interface
// 感觉有点像 java 里的 类 ，es6 的 class 语法糖
// 必须长的一样
// 接口一般首字母大写，在接口前加上一个大写的 I
// 定义的变量必须和接口的属性一致，不能多也不能少
interface IPerson {
    readonly id: number,    // 只读属性 readonly，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
    name: string,
    age: number,
    sex?: string,    // 给接口的属性后加问号，表示该属性为可选属性，定义的变量里该属性就可有可无
    // [propName: string]: string,     // 会和 age 属性冲突 
    [propName: string]: any   // 任意属性，属性名为字符串，属性值为任意值
    // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集 
    // 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
}
let p: IPerson = {
    id: 69,
    name: `老六`,
    age: 16,
    sex: `男`,
    // width:``
}
// p.id = 99    只读属性无法被赋值