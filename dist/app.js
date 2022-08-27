"use strict";
class ExteralCryptoCurrenchyAPI {
    constructor() {
        this.getCurrenchy = (key) => {
            console.log('Called External API');
            switch (key) {
                case 'Bitcoin':
                    return "$8500";
                case 'Litecoin':
                    return "$8000";
                case 'Etharium':
                    return "$4000";
                default:
                    return "80";
            }
        };
    }
}
class CurrenchyProxy {
    constructor() {
        this.externalapi = new ExteralCryptoCurrenchyAPI();
        this.cash = {};
        this.getCurrenchy = (coin) => {
            if (this.cash[coin] == null) {
                this.cash[coin] = this.externalapi.getCurrenchy(coin);
            }
            return this.cash[coin];
        };
    }
}
const api = new CurrenchyProxy();
console.log(api.getCurrenchy('Bitcoin'));
console.log(api.getCurrenchy('Litecoin'));
console.log(api.getCurrenchy('Etharium'));
console.log(api.getCurrenchy('Bitcoin'));
console.log(api.getCurrenchy('Litecoin'));
console.log(api.getCurrenchy('Etharium'));
console.log(api.getCurrenchy('Bitcoin'));
console.log(api.getCurrenchy('Litecoin'));
console.log(api.getCurrenchy('Etharium'));
