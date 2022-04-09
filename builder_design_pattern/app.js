/**
 * Builder is a creational design pattern that lets you construct complex objects step by step.
 *  The pattern allows you to produce different types and representations 
 * of an object using the same construction code.
 */
class Address{
    constructor(zip_code,street){
        this.zip_code = zip_code;
        this.street = street;
    }
}

class User{
    constructor(name,age,phone,address){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

class UserBuilder {
    constructor(name){
        this.user = new User(name);
    }

    setAge(age){ 
        this.user.age = age
        return this
    }

    setPhone(phone){ 
        this.user.phone = phone
        return this
    }
    setEmail(email){ 
        this.user.email = email
        return this
    }

    setAddress(address){
        this.user.address = address
        return this
    }
  
    build(){
        return this.user
    }
}

const user = new UserBuilder('Hafiz')
user.build()
user.setAge(10)
user.setPhone("01744829193")
user.setEmail("h@gmail.com")
user.setAddress(new Address(1,2))
console.log(user) 