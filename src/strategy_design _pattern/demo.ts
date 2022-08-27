import Startegy, { bKashDiscount, NagodDiscount, TapDiscount } from "./strategy";

const strategy = new Startegy()
strategy.setStrategy(new TapDiscount())

console.log(strategy.discountAmount())