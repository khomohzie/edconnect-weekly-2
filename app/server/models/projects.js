const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id;
        this.name = name;
        this.abstarct = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;
    }
}

class Projects extends DataModel {
    validate(obj) {
        if ((obj.authors.value.length !== 0) && (obj.tags.value.length !== 0)) {
            if ((obj.isArray(obj.authors)) && (obj.isArray(obj.tags))) {
                return true;
            }
        }
        else {
            return false;
        }
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};