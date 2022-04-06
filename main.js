

function createSchool (schoolName) {

    const school = new Object
    school.schoolName = schoolName

    school.students = []

    school.getAllStudents = () => school.students

    school.registerStudent = (student) => school.students.push({name: {firstName:student.firstName, lastName:student.lastName, middleName: student.middleName}, previousSchool: {schoolName: student.schoolName, prevClass: student.prevClass, grade: student.grade, position:student.position}, bioData: {stateOfOrigin: student.stateOfOrigin, residentialAddress: student.residentialAddress}, matricNumber: student.matricNumber})

    school.deleteStudent = (matricNumber) => {school.students = school.students.filter((student)=>student.matricNumber !== matricNumber)}

    school.getStudent = (matricNumber) =>  school.students.filter((student)=>student.matricNumber === matricNumber)[0]

    school.updateStudent = (matricNumber, newStudentData) => {school.students = school.students.map((student)=>student.matricNumber === matricNumber ? newStudentData: student)}

    return Object.seal(school)
}

const ui = new createSchool('ui')


const Tunde = {
    firstName: 'Tunde',
    lastName: 'Remi',
    middleName: 'Martin',
    schoolName: 'PolyIbadan',
    prevClass: '2nd year',
    grade: '1st class honors',
    position: '1st',
    stateOfOrigin: 'Ekiti',
    residentialAddress: 'Gbagada, Lagos',
    matricNumber: 19902
}

const Bisi = {
    firstName: 'Adebisi',
    lastName: 'Adebayo',
    middleName: 'Amelia',
    schoolName: 'Yabatech',
    prevClass: 'final year',
    grade: '1st class honors',
    position: '1st',
    stateOfOrigin: 'Lagos',
    residentialAddress: 'lekki, Lagos',
    matricNumber: 19903
}

ui.registerStudent(Tunde)
ui.registerStudent(Bisi)
ui.updateStudent(19903, {...Bisi, matricNumber: 192289})
console.log(ui.getStudent(192289))