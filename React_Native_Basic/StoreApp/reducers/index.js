import { combineReducers } from 'redux'
import orderItems from './orderItems.js'
import cartItems from './cartItems.js'

export default combineReducers ({
    orderItems,
    cartItems
}) 