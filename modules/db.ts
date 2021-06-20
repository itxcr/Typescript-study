import {MongoDB} from "../03-db";

class User {
    username: string | undefined
    password: string | undefined
}

let user = new User();
user.username = 'test'
user.password = '111111'

let mongo = new MongoDB<User>()

mongo.add(user)

mongo.get(4)
