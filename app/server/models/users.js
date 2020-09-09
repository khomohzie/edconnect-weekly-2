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