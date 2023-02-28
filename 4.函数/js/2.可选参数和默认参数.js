let getName = function (x = `李`, y, z = `你好`) {
    return x + y + z;
};
// 可选参数 ？必选参数不能位于可选参数后面
// 默认参数 = 可以放在可选参数和必选参数之后
console.log(getName(`马六`));
