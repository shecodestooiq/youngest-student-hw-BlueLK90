function showYoungestStudent(arr) {
    var youngestName = arr[0].name;
    var youngestAge = arr[0].age;
    for (let i = 1; i < arr.length; i++){
        if (arr[i].age < youngestAge){
            youngestName = arr[i].name;
            youngestAge = arr[i].age;
        }
            
    }
    console.log(youngestName, youngestAge);
}
var students = [
    {name: "Ali", age: 15}, 
    {name: "Ahmed", age: 11}, 
    {name: "Ayman", age: 13}, 
    {name: "Aya", age: 16}, 
    {name: "Alia", age: 17},
    {name: "Arwa", age: 14}
    ]
showYoungestStudent(students)

module.exports = showYoungestStudent;

