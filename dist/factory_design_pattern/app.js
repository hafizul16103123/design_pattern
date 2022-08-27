"use strict";
var EMPLOYEE_TYPE;
(function (EMPLOYEE_TYPE) {
    EMPLOYEE_TYPE["DEVELOPER"] = "DEVELOPER";
    EMPLOYEE_TYPE["TESTER"] = "TESTER";
    EMPLOYEE_TYPE["CODER"] = "CODER";
})(EMPLOYEE_TYPE || (EMPLOYEE_TYPE = {}));
class Developer {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.type = EMPLOYEE_TYPE.DEVELOPER;
    }
}
class Tester {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.type = EMPLOYEE_TYPE.TESTER;
    }
}
class Coder {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.type = EMPLOYEE_TYPE.TESTER;
    }
}
class EmployeeFactory {
    create(name, type) {
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
function sayHello(emp) {
    console.log(`${emp.name} ${emp.type}`);
}
const EmployeeFactry = new EmployeeFactory();
const employees = [];
employees.push(EmployeeFactry.create('piyash', EMPLOYEE_TYPE.DEVELOPER));
employees.push(EmployeeFactry.create('khan', EMPLOYEE_TYPE.TESTER));
employees.push(EmployeeFactry.create('Hamdan', EMPLOYEE_TYPE.DEVELOPER));
employees.push(EmployeeFactry.create('Noushin', EMPLOYEE_TYPE.TESTER));
employees.push(EmployeeFactry.create('Kaxy', EMPLOYEE_TYPE.CODER));
employees.forEach(emp => {
    sayHello(emp);
});
