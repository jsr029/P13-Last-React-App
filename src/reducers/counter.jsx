const counterReducer = (state=0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 5 
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default:
            return state
    }
}
export default counterReducer