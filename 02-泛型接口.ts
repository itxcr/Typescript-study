interface Config {
    (key: string, val: string): string;
}

let md5: Config = function (key: string, val: string) {
    return val + key
}
