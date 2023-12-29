const employee = {
    name: 'Elias',
    streetAddress: '6 Chord Street',
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {employee, "name": "Elias", 
    "streetAddress": "6 Chord Street"}
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, 
    key, value){employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    const newObj2 = {...employee[key]}
    delete newObj2[key]
    return newObj2
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee 
}
