interface DiscountStrategy {
    discountAmount(): number
}
export class bKashDiscount implements DiscountStrategy {
    //calculate discount logic
    discountAmount = () => {
        return 1.5;
    }
}
export class NagodDiscount implements DiscountStrategy {
    //calculate discount logic
    discountAmount = () => {
        return 2.5;
    }
}
export class AmrPayDiscount implements DiscountStrategy {
    //calculate discount logic
    discountAmount = () => {
        return 3.5;
    }
}
export class TapDiscount implements DiscountStrategy {
    //calculate discount logic
    discountAmount = () => {
        return 0.5;
    }
}

export default class Startegy {
    public company: any

    setStrategy = (company: DiscountStrategy) => {
        this.company = company
    }
    discountAmount = () => {
        return this.company.discountAmount()
    }

}