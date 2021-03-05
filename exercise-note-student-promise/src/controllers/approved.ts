import { Exam as ISExam } from '../models/exam';
type Exam = Array<ISExam>;

/**
 * Approved is used to show approved students 
 */
export class Approved {

    /**
     * @param {string} note 
     * 
     * @return {Array} 
     */
    public async forListApprovedStudent(note: number): Promise<Object> {
        return new Promise((resolve, reject) => {

            let student: ISExam = new ISExam;
            let exams: any = student.getExams();
            let approved: any = [];

            for (let i = 0; i < exams.length; i++) {
                if (exams[i].score >= note) {

                    let fullName: string = this.capitalize(exams[i]);
                    delete exams[i].lastname;
                    delete exams[i].name;
                    exams[i].fullName = fullName;

                    approved.push(exams[i]);
                }
            }
            /* Returned list of students ordered in ascending order */
            approved.sort(function (a: any, b: any) {
                return a.score - b.score;
            });

            resolve(approved);
        });
    }
    /**
     * 
     * @param {number} seg
     * 
     * @return {String} 
     */
    public async sleepTime(seg: number): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(function (): void {
                resolve('End Promise')
            }, seg * 1000);
        })
    }

    /**
     * 
     * @param {Array} student
     * 
     * @return {String}
     */
    private capitalize(student: any) {
        let name = student.name.charAt(0).toUpperCase() +
            student.name.toLowerCase().slice(1);
        let lastname = student.lastname.charAt(0).toUpperCase() +
            student.lastname.toLowerCase().slice(1);

        let fullName = name + ' ' + lastname;

        return fullName.trim();
    }
}
