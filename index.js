function showYoungestStudent(arr) {
    if (arr.length === 0) console.log('No Students Found.');
    else {
        var youngest = arr[0];
    
        for (let i = 1; i < arr.length; i++){
            if (arr[i].age < youngest.age){
                youngest = arr[i];
            }
        }
    }
    console.log(youngest.name);
}
var students = [
    {name: "Ali", age: 15}, 
    {name: "Ahmed", age: 11}, 
    {name: "Ayman", age: 13}, 
    {name: "Aya", age: 16}, 
    {name: "Alia", age: 10},
    {name: "Arwa", age: 14}
    ]
showYoungestStudent(students)

module.exports = showYoungestStudent;

