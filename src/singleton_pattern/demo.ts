import { Singleton } from './singleton';
const singletonObj1 = Singleton.getInstanse()
const singletonObj2 = Singleton.getInstanse()
if(singletonObj1===singletonObj2){
console.log('Both are from same instance')
}else{
    console.log('Both are not from same instance')
}