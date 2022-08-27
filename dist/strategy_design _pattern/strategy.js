"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapDiscount = exports.AmrPayDiscount = exports.NagodDiscount = exports.bKashDiscount = void 0;
class bKashDiscount {
    constructor() {
        //calculate discount logic
        this.discountAmount = () => {
            return 1.5;
        };
    }
}
exports.bKashDiscount = bKashDiscount;
class NagodDiscount {
    constructor() {
        //calculate discount logic
        this.discountAmount = () => {
            return 2.5;
        };
    }
}
exports.NagodDiscount = NagodDiscount;
class AmrPayDiscount {
    constructor() {
        //calculate discount logic
        this.discountAmount = () => {
            return 3.5;
        };
    }
}
exports.AmrPayDiscount = AmrPayDiscount;
class TapDiscount {
    constructor() {
        //calculate discount logic
        this.discountAmount = () => {
            return 0.5;
        };
    }
}
exports.TapDiscount = TapDiscount;
class Startegy {
    constructor() {
        this.setStrategy = (company) => {
            this.company = company;
        };
        this.discountAmount = () => {
            return this.company.discountAmount();
        };
    }
}
exports.default = Startegy;
