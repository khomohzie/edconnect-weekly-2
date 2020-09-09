class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        var user = this.data.find(user => user.id === id);
        return user ? user : null;
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        var index = this.data.findIndex(user => user.id === id);
        if (index < 0) {
            return false;
        }
        var old = this.data[index];
        for (const prop in obj) {
            old[prop] = obj[prop];
        }
        return true;
    }

    delete(id) {
        if (this.getById(id)) {
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