export class Student {
    firstname: string;
    lastname: string;
    age: number;
    grade: number;

    constructor(firstname: string, lastname: string, age: number, grade: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.grade = grade;
    }

    public getFullname() {
        return this.firstname+' '+this.lastname;
    }

    public getAge() {
        return this.age;
    }

    public getGrade() {
        return this.grade;
    }

    public setGrade(newGrade: number) {
        this.grade = newGrade;
    }
}