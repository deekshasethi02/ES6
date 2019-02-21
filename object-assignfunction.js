var employee=new Object();
employee.name="deeksha";
employee.salary=23300;
var employeeCopy=Object.assign({},employee);
console.log("employee: ",employee);
console.log("employeeCopy: ",employeeCopy);
employeeCopy.id=123;
console.log("employeeCopy: ",employeeCopy);
console.log("employee: ",employee);