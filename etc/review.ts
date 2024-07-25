const students: string[] = ["Max", "John", "Din", "Brian", "Others"];

let { 0: one, 1: two, 2: three, ...others } = students;

students[0] = "Joseph"

console.log(students)
