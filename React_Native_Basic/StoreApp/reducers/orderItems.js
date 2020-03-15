const orderItems = (state = [], action) => {
    switch(action.type)
    {
        case 'ADD_TO_ORDER':{
            const obj = JSON.parse(JSON.stringify(action.payload));
            return [...state, obj];
        }
        case 'REMOVE_FROM_ORDER':
            return state.filter(cartItem => cartItem.id !== action.payload.id);
        default:    
            return state;
    }
}

export default orderItems