import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Category from './Screens/Category.js';
import Categories from './Screens/Categories.js';
import Cart from './Screens/Cart.js';
import Orders from './Screens/Orders.js';
import Settings from './Screens/Settings.js';


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

CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-cart"  size={36} color = {focused ? color.ACTIVE : color.INACTIVE}/>
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