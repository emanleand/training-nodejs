interface ISExam {
    name: string,
    lastname: string,
    score: number
}

/**
 * This sets the exam data
 */
export class Exam {
    public exams!: Array<ISExam>;

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
        ]
    }

    /**
     * @return {Array}
     */
    public getExams(): Array<ISExam> {
        return this.exams;
    }
}