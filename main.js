
class createSchool {
    constructor(schoolName){
        this.schoolName = schoolName;
        this.students = []
    };

    registerStudent = (newStudent) => {
        this.students.push(newStudent)
    };

    getAllStudents = () => this.students;

    getStudent = (matricNumber) => {
        return this.students.filter((student)=>student.matricNumber === matricNumber)[0]
    };

    deleteStudent = (matricNumber) => {
        this.students = this.students.filter((student)=>student.matricNumber !== matricNumber)
    };

    updateStudent = (matricNumber, newFirstName) => {
       this.students = this.students.map((student)=>student.matricNumber === matricNumber ? {...student, firstName: newFirstName}:student)
    }

}