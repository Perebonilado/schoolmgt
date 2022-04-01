

function createSchool (schoolName) {

    const school = new Object
    school.schoolName = schoolName

    school.students = []

    school.getAllStudents = () => school.students

    school.registerStudent = (
        firstName, 
        lastName, 
        middleName, 
        schoolName, 
        prevClass, 
        grade, 
        position, 
        stateOfOrigin, 
        residentialAddress,
        matricNumber
        ) => school.students.push({name: {firstName, lastName, middleName}, previousSchool: {schoolName, prevClass, grade, position}, bioData: {stateOfOrigin, residentialAddress}, matricNumber})

    school.deleteStudent = (matricNumber) => {school.students = school.students.filter((student)=>student.matricNumber !== matricNumber)}

    school.getStudent = (matricNumber) =>  school.students.filter((student)=>student.matricNumber === matricNumber)[0]

    school.updateStudent = (matricNumber, newStudentData) => {school.students = school.students.map((student)=>student.matricNumber === matricNumber ? newStudentData: student)}

    return Object.seal(school)
}

const ui = new createSchool('ui')
const newStudent = ui.registerStudent('Perebonilado', 'Eradiri', 'Richard', 'Greenoak', 'grade12', 'A+', '1st','Bayelsa', 'Opolo, Bayelsa', 192289)
const anotherNewStudent = ui.registerStudent('James', 'Patrick', 'Johnson', 'Loyola', 'grade12', 'A+', '2nd','Rivers', 'Ada george', 193367)
const uiStudents = ui.getAllStudents()
const student = ui.getStudent(193367)


console.log(ui)
console.log(uiStudents)
console.log(student)

