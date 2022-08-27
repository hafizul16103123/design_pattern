/**
 *  Problem
    Since some methods return null instead of real objects, you have many checks for null in your code.

    Solution
    Instead of null, return a null object that exhibits the default behavior.
 */
    class User {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        hasAccess() {
            return this.name === 'Bob'
        }
    }
    
    // create null object
    class NullUser{
        constructor() {
            this.id = -1;
            this.name = 'Guest';
        }
    
        hasAccess() {
            return false
        }
    
    }
    const users = [new User(1, 'Bob'),new User(2, 'Boy')]
    
    const getUser=(id)=>{
        const user = users.find(e=>e.id===id)
        if(!user) return new NullUser();
        return user
    }
    
    const printUser = (id) =>{
        const user = getUser(id)
        if(user.hasAccess()){
            console.log(`Hello ${user.name}`)
            console.log('You have access')
        }else{
            console.log(`Hello ${user.name}`)
            console.log('You don,t have access')
        }
    }
    printUser(5)