export class Singleton{
    private static singleton:Singleton;
    private constructor(){}
    public static getInstanse():Singleton{
        if(!Singleton.singleton){
            Singleton.singleton= new Singleton()
        }
            return Singleton.singleton
        
    }
}