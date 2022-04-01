

function createSchool (schoolName) {

    const school = new Object
    school.schoolName = schoolName

    school.students = []

    school.getAllStudents = () => school.students

    school.registerStudents = (student) => school.students.push(student)

    school.deleteStudent = (matricNumber) => {school.students = school.students.filter((student)=>student.matricNumber !== matricNumber)}

    school.getStudent = (matricNumber) =>  school.students.filter((student)=>student.matricNumber === matricNumber)[0]

    school.deleteStudent = (matricNumber) => {school.students = school.students.filter((student)=>student.matricNumber !== matricNumber)}

    school.updateStudent = (matricNumber, newStudentData) => {school.students = school.students.map((student)=>student.matricNumber === matricNumber ? newStudentData: student)}

    return Object.seal(school)
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


console.log(ui)

