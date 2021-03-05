import { Approved } from './controllers/approved';

let student = new Approved;

let note: number = 4;
let seg: number = 1;

Promise.all([student.forListApprovedStudent(note), student.sleepTime(seg)])
    .then((value) => {
        console.log(value);
    });