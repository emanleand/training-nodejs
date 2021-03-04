/**
 * Returns a list of students who pass a specific grade.
 * The list is sorted in ascending order by note.
 *
 */
class Student {
    constructor() {
        this.students = [
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
     * 
     * @param {Array} note
     * @return {Array}
     */
    forListApprovedStudent(note) {
        let approved = [];
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].score >= note) {
                let fullName = this.__capitalize(this.students[i]);

                delete this.students[i].lastname;
                delete this.students[i].name;
                this.students[i].fullName = fullName;

                approved.push(this.students[i]);
            }
        }
        //returned list of students ordered in ascending order
        approved.sort(function (a, b) {
            return a.score - b.score;
        });

        return approved;
    }

    /**
     * 
     * @param {Array} note
     * @return {Array}
     */
    whileListApprovedStudent(note) {
        let approved = [];
        let i = 0;
        while (i < this.students.length) {
            if (this.students[i].score >= note) {
                let fullName = this.__capitalize(this.students[i]);

                delete this.students[i].lastname;
                delete this.students[i].name;
                this.students[i].fullName = fullName;

                approved.push(this.students[i]);
            }
            i++;
        }
        //returned list of students ordered in ascending order
        approved.sort(function (a, b) {
            return a.score - b.score;
        });

        return approved;
    }

    /**
     * 
     * @param {Array} note
     * @return {Array}
     */
    doWhileListApprovedStudent(note) {
        let approved = [];
        let i = 0;
        do {
            if (this.students[i].score >= note) {
                let fullName = this.__capitalize(this.students[i]);

                delete this.students[i].lastname;
                delete this.students[i].name;
                this.students[i].fullName = fullName;

                approved.push(this.students[i]);
            }
            i++;
        } while (i < this.students.length);

        //returned list of students ordered in ascending order
        approved.sort(function (a, b) {
            return a.score - b.score;
        });

        return approved;
    }

    /**
     * 
     * @param {Array} student
     * @return {String}
     */
    __capitalize(student) {
        let name = student.name.charAt(0).toUpperCase() +
            student.name.toLowerCase().slice(1);
        let lastname = student.lastname.charAt(0).toUpperCase() +
            student.lastname.toLowerCase().slice(1);

        let fullName = name + ' ' + lastname;

        return fullName.trim();
    }
}

let student = new Student();
//console.log(student.forListApprovedStudent(2));
//console.log(student.whileListApprovedStudent(8));
console.log(student.doWhileListApprovedStudent(1));
