const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id;
        this.name = name;
        this.abstract = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;
    }
}

class Projects extends DataModel {
    validate(obj) {
        var valid = true;
        if (!Array.isArray(obj.authors) || !Array.isArray(obj.tags)) {
            valid = false;
        }
        if (typeof obj.name != 'string' || obj.name.length < 1) {
            valid = false;
        }
        if (typeof obj.abstract != 'string' || obj.abstract.length < 1) {
            valid = false;
        }
        if (typeof obj.createdBy != 'string' || obj.createdBy.length < 1) {
            valid = false;
        }
        if (this.id === null) {
            valid = false;
        }
        return valid;
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};