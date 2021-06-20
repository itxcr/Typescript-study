/*
    方法装饰器
      会被应用到方法的属性描述上，可用来监视，修改或替换方法定义

      需要三个参数
        1. 对于静态成员来说是类的构造函数，对实例成员来说是类的原型对象
        2. 成员的名字
        3. 成员的属性描述
 */

function get(params: any) {
    return (target: any, methodName: any, desc: any) => {
        console.log(target)
        console.log(methodName)
        console.log(desc)
        console.log(desc.value)

        target.apiUrl = params
        target.run = () => {
            console.log(123)
        }

        //装饰器 修改 getData方法
        // 1.保存当前方法
        let oldM = desc.value
        // desc.value = function (...args: any[]) {
        //     args = args.map((value) => {
        //         return String(value)
        //     })
        //     console.log(args)
        //     oldM.apply(this, args)
        // }

        desc.value = (...args: any[]) => {
            args = args.map((value) => {
                return String(value)
            })
            console.log(args)
            oldM.apply(this, args)
        }
    }
}

class Action {
    constructor() {
    }

    @get('http://itxcr.com')
    getData(...args:any[]) {
        console.log('类里面方法')
        console.log(args)
    }
}

let c: any = new Action()
c.run()
console.log(c.apiUrl)
c.getData(123, 'we', 454)
