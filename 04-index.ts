import {UserClass, UserModel} from "./module/user";
import {ArticleClass, ArticleModel} from "./module/article";

let user = new UserClass()
user.username = 'test';
user.password = `123456`
UserModel.add(user)

let article = new ArticleClass()
article.title = '海贼王'
article.desc = '尾田'
ArticleModel.add(article)

