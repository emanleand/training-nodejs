"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
/**
 * This sets the exam data
 */
class Exam {
    constructor() {
        this.exams = [
            {
                name: 'james',
                lastname: 'swaw',
                score: 4
            },
            {
                name: 'evelyn',
                lastname: 'do',
                score: 2
            },
            {
                name: 'jonh',
                lastname: 'jackson',
                score: 8
            },
            {
                name: 'ROBERT',
                lastname: '',
                score: 8
            }
        ];
    }
    /**
     * @return {Array}
     */
    getExams() {
        return this.exams;
    }
}
exports.Exam = Exam;
