interface DBI<T> {
    add(info: T): boolean;

    update(info: T, id: number): boolean

    delete(id: number): boolean

    get(id: number): any[]

}

export class MongoDB<T> implements DBI<T>{
    constructor() {
        console.log('数据库建立连接')
    }

    add(info: T): boolean {
        console.log(info)
        return false;
    }

    delete(id: number): boolean {
        return false;
    }

    get(id: number): any[] {
        return [];
    }

    update(info: T, id: number): boolean {
        return false;
    }
}

