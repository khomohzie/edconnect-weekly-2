class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        if (id == this.data.id) {
            return getFullName();
        }
        else {
            return null;
        }
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        if (id == this.data.id) {
            this.data.push(obj);
            return true;
        }
        else{
            return false;
        }
    }

    delete(id) {
        if (id == this.data.id) {
            this.data = this.data.filter(function (obj) {
                return obj.id !== id;
            });
            return true;
        }
        return false;
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;