"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const approved_1 = require("./controllers/approved");
let student = new approved_1.Approved;
let note = 4;
let seg = 1;
Promise.all([student.forListApprovedStudent(note), student.sleepTime(seg)])
    .then((value) => {
    console.log(value);
});
