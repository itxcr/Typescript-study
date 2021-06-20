/*
    方法参数装饰器会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入3参数
      1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
      2. 方法的名字
      3. 参数在函数参数列表中的索引
 */

function logParams(params: any) {
    return (target: any, methodName: any, paramsIndex: any) => {
        console.log(params)
        console.log(target)
        console.log(methodName)
        console.log(paramsIndex)

        target.apiUrl = params

    }
}

class getNew {
    constructor() {
    }

    getData(@logParams('xxx') uuid: any) {
        console.log(uuid)
    }
}

let d:any = new getNew()

d.getData(123456)
console.log(d.apiUrl)
