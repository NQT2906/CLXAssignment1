import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, Navigator} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Category from './Screens/Category.js';
import Categories from './Screens/Categories.js';


const AppNavigator = createStackNavigator({
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    }
})

export default AppNavigator;