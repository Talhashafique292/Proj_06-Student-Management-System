"use strict";
class School {
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(tecObj) {
        this.teachers.push(tecObj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
}
class Student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
;
class Teacher extends Student {
    constructor() {
        super(...arguments);
        this.email = "";
        this.contact = "";
    }
    addinfo(email, contact) {
        this.email = email;
        this.contact = contact;
    }
}
;
let school1 = new School("IBA");
let school2 = new School("BFC");
let s1 = new Student("Talha", 13, school2.name);
let s2 = new Student("Faisal", 15, school1.name);
let s3 = new Student("Najam", 14, school2.name);
let t1 = new Teacher("Ahmed", 40, school1.name);
let t2 = new Teacher("Remat", 37, school2.name);
let t3 = new Teacher("Sikandar", 44, school2.name);
school1.addStudent(s2);
school2.addStudent(s1);
school2.addStudent(s3);
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
t1.addinfo("abc@gmail.com", "12345");
t2.addinfo("abcd@gmail.com", "123456");
t3.addinfo("abcde@gmail.com", "1234567");
console.log(school1);
console.log(school2);
