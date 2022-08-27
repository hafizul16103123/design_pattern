enum EMPLOYEE_TYPE {
    DEVELOPER = "DEVELOPER",
    TESTER = "TESTER",
    CODER = "CODER"
}
type  EMPLOYEE_TYPE_TYPE = {
    DEVELOPER : "DEVELOPER",
    TESTER : "TESTER"
}
interface IEmployee{
    name:string;
    type:string;
}

class Developer  {
    private type: string;
    constructor(private name: string) {
        this.name = name;
        this.type = EMPLOYEE_TYPE.DEVELOPER
    }
}
class Tester {
    private type: string;
    constructor(private name: string) {
        this.name = name;
        this.type = EMPLOYEE_TYPE.TESTER
    }
}
class Coder {
    private type: string;
    constructor(private name: string) {
        this.name = name;
        this.type = EMPLOYEE_TYPE.TESTER
    }
}

class EmployeeFactory {

    create(name: string, type: string) {
        switch (type) {
            case EMPLOYEE_TYPE.DEVELOPER:
                return new Developer(name);
            case EMPLOYEE_TYPE.CODER:
                return new Coder(name);

            default:
                return new Tester(name);
        }
    }
}
function sayHello(emp:any){
    console.log(`${emp.name} ${emp.type}`)
}

const EmployeeFactry = new EmployeeFactory();
const employees = [];
employees.push(EmployeeFactry.create('piyash', EMPLOYEE_TYPE.DEVELOPER) )
employees.push(EmployeeFactry.create('khan', EMPLOYEE_TYPE.TESTER))
employees.push(EmployeeFactry.create('Hamdan', EMPLOYEE_TYPE.DEVELOPER))
employees.push(EmployeeFactry.create('Noushin', EMPLOYEE_TYPE.TESTER))
employees.push(EmployeeFactry.create('Kaxy', EMPLOYEE_TYPE.CODER))

employees.forEach(emp  => {
    sayHello(emp)
});
