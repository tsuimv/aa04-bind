const Employee = require("/home/tsuimv/AppAcademyWork/aa04-bind/employee")

let employee = new Employee('John Wick', 'Dog Lover')
let sayNameFunc = employee.sayName
let sayName = sayNameFunc.bind(employee)
// sayName()
let bound = employee.sayName.bind(employee)
global.setTimeout(bound, 2000)

sayOccupationFunc = employee.sayOccupation
let oBound = employee.sayOccupation.bind(employee)
global.setTimeout(oBound, 3000) 
