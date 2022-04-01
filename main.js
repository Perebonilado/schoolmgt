
// class createSchool {
//     constructor(schoolName){
//         this.schoolName = schoolName;
//         this.students = []
//     };

//     registerStudent = (newStudent) => {
//         this.students.push(newStudent)
//     };

//     getAllStudents = () => this.students;

    // getStudent = (matricNumber) => {
    //     return this.students.filter((student)=>student.matricNumber === matricNumber)[0]
    // };

    // deleteStudent = (matricNumber) => {
    //     this.students = this.students.filter((student)=>student.matricNumber !== matricNumber)
    // };

    // updateStudent = (matricNumber, newFirstName) => {
    //    this.students = this.students.map((student)=>student.matricNumber === matricNumber ? {...student, firstName: newFirstName} : student)
    // }

// }

function createSchool (schoolName) {
    
    this.schoolName = schoolName
    this.students = []
    this.getAllStudents = () => this.students
    this.registerStudents = (student) => this.students.push(student)
    this.deleteStudent = (matricNumber) => {this.students = this.students.filter((student)=>student.matricNumber !== matricNumber)}
    this.getStudent = (matricNumber) => {
        return this.students.filter((student)=>student.matricNumber === matricNumber)[0]
    }
    this.deleteStudent = (matricNumber) => {
        this.students = this.students.filter((student)=>student.matricNumber !== matricNumber)
    }
    this.updateStudent = (matricNumber, newStudentData) => {
        this.students = this.students.map((student)=>student.matricNumber === matricNumber ? newStudentData: student)
     }

}

const ui = new createSchool('ui')
ui.registerStudents({
    name: 'Mark',
    matricNumber: 192289
})
ui.registerStudents({
    name: 'Jane',
    matricNumber: 192286
})

ui.updateStudent(192286, {name: 'Mary', matricNumber: 192286})


console.log(ui.getStudent(192286))

