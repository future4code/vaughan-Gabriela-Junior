const age: number = 18
const highSchoolCompleted: boolean = true
const hoursAvailable: number = 20
const shift: string = "noturno"

const canStudyInLabenu = (age: number, highSchool: boolean, hours: number, shift: string): any => {
    if (shift === "noturno") {
        if (age >= 18 && highSchool === true && hours >= 20 && shift === "noturno") {
            return true
        } else {
            return false
        }
    } else if (shift === "integral") {
        if (age>= 18 && highSchool === true && hours >= 40) {
            return true
        } else {
            return false
        }
    }
};

console.log(canStudyInLabenu(age, highSchoolCompleted, hoursAvailable, shift))