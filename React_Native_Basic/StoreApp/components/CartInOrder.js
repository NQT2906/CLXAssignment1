import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import ProductInCart from './ProductInCart'

export default function CartInOrder (props){
    const { cartItem } = props;
    console.log("CART: -------------------------")
    console.log(cartItem)
    const totalPrice = cartItem.reduce( function( accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0)
    return (
        <View>
            <View>
                <Text>Order:</Text>
            </View>
            <View>
                <Text>
                    {(cartItem).map( product => (
                        <ProductInCart key = {product.id} product = {product} />
                    ))}
                </Text>
            </View>
            <View style = {styles.totalContainer}>
                <Text style = {styles.totalInside}>Total: {totalPrice}₫</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },

    container: {
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: 390,
        height: 150,
    },

    img: {
        height: 80,
        width: 80,
        marginTop: 30,
    },
    
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 60,
        marginLeft: 20
    },
    
    quantity: {
        marginTop: 55,
        marginLeft: 40,
        marginBottom: 55,
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1.5,
        borderRadius: 0.5,
        alignItems: 'center'
    },

    quantityProduct: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 7,
    },

    quantityButton: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 65,
        marginLeft: 35
    },

});