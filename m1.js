import { observable,useStrict,action,computed,autorun } from "mobx";//, action, computed
class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;
 
    constructor() {
        autorun(() => console.log(this.report));
    }
 
    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }
 
    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";
    return `Next todo: "${this.todos[0].task}". ` + 
        `Progress: ${this.completedTodosCount}/${this.todos.length}`; 
    }
 
    addTodo(task) {
    this.todos.push({ 
        task: task,
        completed: false,
        assignee: null
    });
    }
}
const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("hi");
observableTodoStore.addTodo("hi2");