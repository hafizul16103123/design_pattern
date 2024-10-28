class CarPrototype{

  constructor(model,engine){
    this.model = model
    this.engine = engine
  }
  clone(){
    return Object.assign({},this)
  }

}
const teslaCar = new CarPrototype("Tesla small","Electric")
console.log(teslaCar.model)

const teslaX = teslaCar.clone()
teslaX.model = "Tesla x"
console.log(teslaX)