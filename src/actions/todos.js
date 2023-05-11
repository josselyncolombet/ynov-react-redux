
const getTodoSuccess = todo => ({
    type: "GET_TODO_SUCCESS",
    payload: todo
})

const getTodoStarted = () => ({
    type: "GET_TODO_STARTED"
})

const getTodoFailed = error => ({
    type: "GET_TODO_FAILED",
    payload: error
})

export const getTodo = () => {
    return async dispatch => {
        dispatch(getTodoStarted())
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'GET'
        })

        const todos = await response.json()
        dispatch(getTodoSuccess(todos))
    }
}