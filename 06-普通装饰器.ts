/*
    装饰器：特殊类型的声明，能够被附加到类声明，方法，属性 或 参数上，可以修改类的行为

    装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类、属性、方法、参数的功能

    创建装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器写法：普通装饰器(无法传参)  装饰器工厂(可传参)

 */

// 1.类装饰器：类装饰器在类声明之前声明。
// 类装饰器用于类构造函数，可以用来监视，修改或替换类定义，传入一个参数

// 类装饰器
function logClass(params: any) {
    params.prototype.apiUrl = 'xxx'
    params.prototype.run = () => {
        console.log('run')
    }
}

@logClass
class TestAgain {
    constructor() {
    }
    getData() {
    }
}

let test: any = new TestAgain()
test.run()
console.log(test.apiUrl)
