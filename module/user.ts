import {MongoDB} from "../03-db";

// 定义数据库映射
class UserClass {
    username: string | undefined
    password: string | undefined
}

let UserModel = new MongoDB<UserClass>()

export {UserClass, UserModel}
