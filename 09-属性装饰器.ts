/*
 属性装饰器表达式会在运行时当做函数被调用，传入2个参数
  1.对于静态成员来说是类的构造函数，对实例成员来说是类的原型对象
  2.成员的名字
 */

// 类装饰器
function calTet(params: string) {

    return function (target: any) {

    }

}

// 属性装饰器

function caclData(params: any) {
    return function (target:any, attr: any) {
        target[attr] = params
    }
}
@calTet('xxx')
class Cac {
    @caclData('test')
    url: string | undefined

    constructor() {
    }

    getData() {
        console.log(this.url)
    }
}

let a = new Cac()
a.getData()
