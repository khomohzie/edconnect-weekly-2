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
        var found = false;
        for(var i = 0; i < this.data.length; i++) {
            if (this.data[i].email === email) {
                if (this.data[i].password === password)
                found = true;
                break;
            }
        }
        if (found == true) {
            return true;
        }
        else {
            return false;
        }
    }

    getByEmail(email) {
        if (email == this.data.email) {
            return this.data;
        }
        return null;
    }

    getByMatricNumber(matricNumber) {
        if (matricNumber == this.data.matricNumber) {
            return this.data;
        }
        return null;
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