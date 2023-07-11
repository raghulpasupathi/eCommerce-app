// defining all app level states and actions to make changes to state

export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET": 
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            
        default: return state;
    }
}

export default reducer;