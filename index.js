function showYoungestStudent(arr) {
    if (arr.length == 0) console.log('No Students Found.');
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
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 2 },
    { name: 'Charlie', age: 21 },
    ]
showYoungestStudent(students)

module.exports = showYoungestStudent;

