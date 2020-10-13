/**
 * format the time in like this style "10/13/2020, 1:58:02 AM"
 * @param date {Date}
 * @returns {string}
 */
export function formatDate(date) {
    return date.toLocaleString() ;
}

/**
 * return all the completed todos
 * @param state
 * @returns {[]}
 */
export function getCompletedTodos(state) {
    return state.todos.filter(todo=>todo.completed) ;
}

/**
 * return in progress todos
 * @param state
 * @returns {[]}
 */
export function getInProgressTodos(state) {
    return state.todos.filter(todo=>!todo.completed);
}

/**
 * return a closure function to get a todo with a specific id
 * @param id {string}
 * @returns {function(*): any}
 */
export function getTodoWithId(id) {
    return state => state.todos.find(todo=>todo.id === id) ;
}
