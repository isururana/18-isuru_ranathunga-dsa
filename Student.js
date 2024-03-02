"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    mark;
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
    }
    getName() {
        return this.name;
    }
    getMark() {
        return this.mark;
    }
}
exports.default = Student;
