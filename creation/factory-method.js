class Car{
    drive(){
        console.log("DRIVE")
    }
}
class Bike{
    ride(){
        console.log("Ride")
    }
}

class VahicalFactory{
    static createVahical(type){
        if(type=='car'){
            return new Car()
        }else if(type == 'bike'){
            return new Bike()
        }

    }
}
const  car =VahicalFactory.createVahical('car')
car.drive()