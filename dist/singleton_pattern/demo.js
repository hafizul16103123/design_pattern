"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
const singletonObj1 = singleton_1.Singleton.getInstanse();
const singletonObj2 = singleton_1.Singleton.getInstanse();
if (singletonObj1 === singletonObj2) {
    console.log('Both are from same instance');
}
else {
    console.log('Both are not from same instance');
}
