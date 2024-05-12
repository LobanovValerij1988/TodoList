const todosSeed = [
    {
         id:1,
         todo : {
                id:1,
                task: "Make a todo list",
                description: "Code quality is very important",
                isDone: false
         },
     },
     {
         id:2,
         todo: {
               id:2,
               task: "To have an interview with employer",
               description: "I need to show all my knowledge and charming",
               isDone:false
         },
     },
     {
         id:3,
         todo: {
               id:3,
               task: "To get a new job",
               description: "",
               isDone:false
         },
     },
 
     {
         id:4,
         todo: {
               id:4,
               task: "To celebrate getting the job",
               description: "Buy a botlle of whiskey",
               isDone:false
         },
     }
 ]

export function seedingTodoList() {
    for(let i = 0; i < todosSeed.length; i++){
        localStorage.setItem(todosSeed[i].id,JSON.stringify(todosSeed[i].todo));
    }
}

export function getTodosFromLocalStorage() {
    let todos = [];
    const ids = Object.keys(localStorage);
    const todosLength = ids.length;
    for(let i = 0; i < todosLength; i++ ) {
        const todo = localStorage.getItem(ids[i]) 
        todos.push(JSON.parse(todo));
    }
    return todos;
}