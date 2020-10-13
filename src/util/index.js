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
