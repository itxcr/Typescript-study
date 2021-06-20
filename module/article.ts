import {MongoDB} from "../03-db";

// 定义数据库映射
class ArticleClass {
    title: string | undefined
    desc: string | undefined
}

let ArticleModel = new MongoDB<ArticleClass>()

export {ArticleClass, ArticleModel}
