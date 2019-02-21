var roles={
type:"Admin", // default role
showType: function(){
// show the type of role
    console.log(this.type);
}
}
//create new super_role
var super_role=Object.create(roles);
super_role.showType();
//Create new manager_role
var manager_role=Object.create(roles);
manager_role.type="Manager";
manager_role.showType();