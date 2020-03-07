const initialUserState = {
    arr: []
}

const cartItems = (state = initialUserState, action) => {
    console.log(arr);
    switch(action.type)
    {
        case 'ADD_TO_CART':
            return {...state, arr: [...state.arr, action.payload] };
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.id !== action.payload.id);
    }
    return state
}

export default cartItems