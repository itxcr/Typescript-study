function logClassAgain(params: string) {
    return function (target: any) {
        target.prototype.path = `http://${params}`
    }
}

@logClassAgain('baidu.com')
class DecFact {
    constructor() {
    }
}

let testResult:any = new DecFact()

console.log(testResult.path)


