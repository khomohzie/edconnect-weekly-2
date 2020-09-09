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
            if ((this.data[i].email === email) && (this.data[i].password === password)) {
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
        var user = this.data.find(function (user) {
           if (user.email === email) {
               return true;
           }
           return false;
        });
        return user ? user : null;  // if what's on the left is true, return the right otherwise return what's after the colon (tenary operator)
    }

    getByMatricNumber(matricNumber) {
        var user  = this.data.find(user => user.matricNumber === matricNumber);
        return user ? user : null; 
    }

    validate(obj) {
        var valid = true;
        if (this.id = null) {
            valid = false;
        }
        if (typeof obj.firstname != 'string' || obj.firstname.length < 1) {
            valid = false;
        }
        if (typeof obj.lastname != 'string' || obj.lastname.length < 1) {
            valid = false;
        }
        if (typeof obj.email != 'string' || obj.email.length < 1) {
            valid = false;
        }
        if (typeof obj.password != 'string' || obj.password.length < 1) {
            valid = false;
        }
        if (typeof obj.program != 'string' || obj.program.length < 1) {
            valid = false;
        }
        if (typeof obj.matricNumber != 'string' || obj.matricNumber.length < 1) {
            valid = false;
        }
        if (typeof obj.graduationYear != 'string' || obj.graduationYear.length < 1) {
            valid = false;
        }
        if (this.firstname = null) {
            valid = false;
        }
        var user = this.getByEmail(obj.email);
        if (user != null) {
            valid = false;
        }
        var user = this.getByMatricNumber(obj.matricNumber);
        if (user != null) {
            valid = false;
        }
        if (obj.password.length < 7) {
            valid = false;
        }
        return valid;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};