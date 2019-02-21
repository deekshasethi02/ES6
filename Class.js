class Employee{
constructor(name,salary){
this.name=name;
this.salary=salary;
}
showEmployeeDetail(){
console.log('name : ',this.name);
console.log('salary : ',this.salary);
}
}
var employee=new Employee('deeksha',90000);
employee.showEmployeeDetail();