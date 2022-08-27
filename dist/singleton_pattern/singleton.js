"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() { }
    static getInstanse() {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    }
}
exports.Singleton = Singleton;
