class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        let specId = id;
        if (specId === obj.id) {
            return obj;
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
        let specId = id;
        if (specId === obj.id) {
            return true;
        }
        else{
            return false;
        }
    }

    delete(id) {
        let specId = id;
        if (specId === this.data.obj.id) {
            delete this.data.Obj;
            return true;
        }
        else {
            return false;
        }
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;