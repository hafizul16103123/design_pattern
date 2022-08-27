class ExteralCryptoCurrenchyAPI{
    getCurrenchy=(key:string):string=>{
        console.log('Called External API')
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
    }
}

class CurrenchyProxy{
    externalapi  = new ExteralCryptoCurrenchyAPI()
    cash:any = {};
    getCurrenchy=(coin:string)=>{
        if(this.cash[coin]==null){
            this.cash[coin] = this.externalapi.getCurrenchy(coin)
        }
        return this.cash[coin];
    }
}
const api = new CurrenchyProxy()
console.log(api.getCurrenchy('Bitcoin'))
console.log(api.getCurrenchy('Litecoin'))
console.log(api.getCurrenchy('Etharium'))
console.log(api.getCurrenchy('Bitcoin'))
console.log(api.getCurrenchy('Litecoin'))
console.log(api.getCurrenchy('Etharium'))
console.log(api.getCurrenchy('Bitcoin'))
console.log(api.getCurrenchy('Litecoin'))
console.log(api.getCurrenchy('Etharium'))