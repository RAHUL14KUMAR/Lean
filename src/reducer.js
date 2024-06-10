export const initialState={
    message:""
}

const reducer=(state,action) => {

    switch(action.type){
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.message,
             };

        default:
            return state
    }    
}
export default reducer;