import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default function ItemInOrder (props){
    const { product } = props;
 
    return (
        <View style = {styles.shadow}>
            {/* <View>
                <Text style = {styles.orderText}>Order:</Text>
            </View> */}
            <View style = {styles.container}>
                <View>
                    <Image style={styles.img} source={{uri: product.image}}/>
                </View>
                <View>
                    <Text style = {styles.name}>{product.name}</Text>
                </View>
                <View style = {styles.priceRow}>
                    
                    <Text>{product.id}</Text>
                    {/* <Text style = {styles.price}>{product.price*product.quantity}₫</Text> */}
                </View>
            </View>
        </View>
    );
}


//export default ProductInCart;

const styles = StyleSheet.create({
    shadow: {
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },

    container: {
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: 390,
        height: 150,
    },

    orderText: {
        top: 5,
        fontSize: 20,
        fontWeight: 'bold'
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