const cartItems = (state = [], action) => {
    switch(action.type)
    {
        case 'ADD_TO_CART':{
            if(action.payload.quantity === 0){
                action.payload.quantity += 1;
                return [...state, action.payload];
            }
            else{
                action.payload.quantity += 1;
                return [...state];
            }
        }
        case 'REMOVE_FROM_CART':
            if(action.payload.quantity === 1){
                action.payload.quantity -= 1;
                state = state.filter(cartItem => cartItem.id !== action.payload.id);
                return [...state];
            }
            else{
                action.payload.quantity -= 1;
                return [...state];
            }
        case 'DELETE_FROM_CART': {
            state = [];
            return [...state];
        }
        default:    
            return state;
    }
}

export default cartItems