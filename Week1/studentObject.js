// Create multiple student objects
const students = [
    {
        id: 101,
        name: "John",
        age: 20,
        grade: "A"
    },
    {
        id: 102,
        name: "Alice",
        age: 21,
        grade: "B"
    },
    {
        id: 103,
        name: "Bob",
        age: 22,
        grade: "A+"
    }
];

// Print all student details
console.log("Student Details:");

students.forEach(student => {
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Grade: ${student.grade}`);
    console.log("------------------");
});