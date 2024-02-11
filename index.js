function showYoungestStudent(students) {
    var youngestName = students[0].name;
    var youngestAge = students[0].age;
    for (let i = 1; i < students.length; i++){
        if (students[i].age < youngestAge){
            youngestName = students[i].name;
            youngestAge = students[i].age;
        }
    }
    console.log(youngestName, youngestAge);
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

