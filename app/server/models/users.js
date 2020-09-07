const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;
    }

    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        if ((email === this.data.obj.email) && (password === this.data.obj.password)) {
            return true;
        }
        return false;
    }

    getByEmail(email) {
        const findEmail = this.data.find(
            (this.data) => {
                return this.data.email === email;
            }
        );
    }

    getByMatricNumber(matricNumber) {
        const findMatricNumber = this.data.find(
            (this.data) => {
                return this.data.matricNumber === matricNumber;
            }
        );
    }

    validate(obj) {
        for (var i = 0; i < this.data.length; i++) {
            if (obj.value.length == 0) {
                if (obj.email === this.data.email) {
                    if (obj.matricNumber === this.data.matricNumber) {
                        if (obj.password.length == 7) {
                            return false;
                        }
                    }
                }
            }
            else {
                return true;
            }
        }
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};