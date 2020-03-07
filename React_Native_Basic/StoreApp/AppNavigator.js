import React from 'react';
import { Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Category from './Screens/Category.js';
import Categories from './Screens/Categories.js';
import Cart from './Screens/Cart.js';
import Orders from './Screens/Orders.js';
import Settings from './Screens/Settings.js';
import { connect } from 'react-redux'
import store from './store'

const CategoryStack = createStackNavigator({
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    }

})

const color = {
    ACTIVE: "#147efb",
    INACTIVE: '#ccc'
}

CategoryStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-home"  size={36} color = {focused ? color.ACTIVE : color.INACTIVE}/>
    }
}

const CartStack = createStackNavigator({
    Cart
})

const CartIcon = function(props) {
    let { focused, cartItems } = props
    return (
        <View style = {{padding : 5}}>
            <Ionicons name="ios-cart"  size={36} color = {focused ? color.ACTIVE : color.INACTIVE}/>
            <View style = {{
                position: "absolute", height: 30, width: 30, borderRadius: 15,
                backgroundColor: '#rgba(95,197,123,0.8)', right: -15, bottom: 15,
                alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                <Text style = {{color: 'white', fontWeight: 'bold'}}>{cartItems.length}</Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
const CartIconConnected = connect(mapStateToProps)(CartIcon)

CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused }) => {
        return <CartIconConnected focused={focused} />
    }
}

const OrdersStack = createStackNavigator({
    Orders
})

OrdersStack.navigationOptions = {
    tabBarLabel: 'Orders',
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-albums"  size={36} color = {focused ? color.ACTIVE : color.INACTIVE}/>
    }
}


const SettingsStack = createStackNavigator({
    Settings
})

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-settings"  size={36} color = {focused ? color.ACTIVE : color.INACTIVE}/>
    }
}


const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrdersStack,
    SettingsStack
})

export default AppNavigator;