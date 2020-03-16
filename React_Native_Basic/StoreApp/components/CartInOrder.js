import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import ItemInOrder from './ItemInOrder'

export default function CartInOrder (props){
    const { cartItem } = props;
    const totalPrice = cartItem.reduce( function( accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0)
    return (
        <View>
            <View style = {styles.orderContainer}>
                <Text style = {styles.order}>Order:</Text>
            </View>
            {(cartItem).map( product => (
                <ItemInOrder key = {product.id} product = {product} />
            ))}
            <View style = {styles.totalPriceContainer}>
                <Text style = {styles.totalPrice}>Total: {totalPrice}₫</Text>
            </View>
            <View style = {styles.dashed}>
                <Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orderContainer: {
        marginTop: 20,
    },

    order: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    totalPriceContainer: {
        marginTop: 20,
    },
    
    totalPrice: {
        fontSize: 24,
        textAlign: 'right',
        fontWeight: 'bold',
        marginRight: 40,
    },

    dashed: {
        backgroundColor: 'black',
        height: 2,
    }

});