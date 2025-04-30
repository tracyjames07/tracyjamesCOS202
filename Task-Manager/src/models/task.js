// Using ES6 modules.
import {nanoid} from 'nanoid';

// Class Declaration - ES6 Class Syntax
export default class Task {
    constructor(title, description = '', dueDate = null) {
        // Constructor with default parameter values.
        this.id = nanoid(8);
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
        this.createdAt = new Date();
    }
    
    // Instance method to toggle completion status.
    toggleComplete() {
        this.completed = !this.completed;
        return this;
    }

// Static method to create task from plain object.
static fromObject(obj) {
    const task = new Task(obj.title, obj.description, obj.dueDate);
    task.id = obj.id;
    task.completed = obj.completed
    task.createdAt = new Date(onj.createdAt);
    return task;
}

// Method to convert to plain object.
toObject() {
    // Using spread operator to create a copy.
    return {...this};
}
}