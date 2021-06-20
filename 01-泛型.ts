class Test<T> {
    list: T[] = []

    add(value: T): T[] {
        this.list.push(value)
        return this.list
    }

    min(): T {
        let min = this.list[0]
        for (let i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i]
            }
        }
        return min
    }

}

let m1 = new Test<string>()
m1.add('d')
m1.add('d')
m1.add('h')
console.log(m1.min())


let m2 = new Test<number>()
m2.add(123)
m2.add(23)
m2.add(232)
console.log(m2.min())
console.log('真狗')
