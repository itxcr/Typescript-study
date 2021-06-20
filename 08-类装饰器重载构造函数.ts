function logClassAgain2(target: any) {
    // 需要重载所有的属性和方法
    return class extends target {
        apiUrl: any = `修改后的`;
        getData() {
            this.apiUrl += this.apiUrl
            console.log(this.apiUrl)
        }
    }
}

@logClassAgain2
class DecFactAgain {
    apiUrl: string | undefined

    constructor() {
        this.apiUrl = '构造函数内的apiUrl'
    }

    getData() {
        console.log(this.apiUrl)
    }
}


let testResultAgain: any = new DecFactAgain()

testResultAgain.getData()


