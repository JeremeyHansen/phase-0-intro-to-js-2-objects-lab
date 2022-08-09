// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee.streetAddress = "12 Broadway";

    return employee;
}
function deleteFromEmployeeByKey(obj, key, value){
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}
delete newEmployee.name 

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete employee.name
    return employee;
}