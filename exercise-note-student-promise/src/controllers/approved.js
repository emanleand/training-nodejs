"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approved = void 0;
const exam_1 = require("../models/exam");
/**
 * Approved is used to show approved students
 */
class Approved {
    /**
     * @param {string} note
     *
     * @return {Array}
     */
    forListApprovedStudent(note) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let student = new exam_1.Exam;
                let exams = student.getExams();
                let approved = [];
                for (let i = 0; i < exams.length; i++) {
                    if (exams[i].score >= note) {
                        let fullName = this.capitalize(exams[i]);
                        delete exams[i].lastname;
                        delete exams[i].name;
                        exams[i].fullName = fullName;
                        approved.push(exams[i]);
                    }
                }
                /* Returned list of students ordered in ascending order */
                approved.sort(function (a, b) {
                    return a.score - b.score;
                });
                resolve(approved);
            });
        });
    }
    /**
     *
     * @param {number} seg
     *
     * @return {String}
     */
    sleepTime(seg) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    resolve('End Promise');
                }, seg * 1000);
            });
        });
    }
    /**
     *
     * @param {Array} student
     *
     * @return {String}
     */
    capitalize(student) {
        let name = student.name.charAt(0).toUpperCase() +
            student.name.toLowerCase().slice(1);
        let lastname = student.lastname.charAt(0).toUpperCase() +
            student.lastname.toLowerCase().slice(1);
        let fullName = name + ' ' + lastname;
        return fullName.trim();
    }
}
exports.Approved = Approved;
