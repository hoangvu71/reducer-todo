export const initialState = {
    toDos: [],
}
export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'addNewTodo':
            return {
                ...state,
                toDos: [...state.toDos, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
        case 'toggleCompleted': 
            return {
                ...state,
                toDos: state.toDos.map((ele) => {
                    if (ele.id === action.payload) {
                        return {
                            ...ele,
                            completed: !ele.completed
                        }
                    }
                    else {
                        return ele
                    }
                })
            }
        case 'clearTodo':
            return {
                ...state,
                toDos: state.toDos.filter((ele) => {
                    return ele.completed === false
                })
            }
        default:
            return {...state}
    }

}