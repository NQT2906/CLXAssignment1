import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default function ItemInOrder (props){
    const { product } = props;
 
    return (
        <View style = {styles.shadow}>
            <View style = {styles.container}>
                <View>
                    <Image style={styles.img} source={{uri: product.image}}/>
                </View>
                <View>
                    <Text style = {styles.name}>{product.name}</Text>
                </View>
                <View>
                    <Text style = {styles.quantity}>X {product.quantity}</Text>
                </View>
                <View>
                    <Text style = {styles.price}>{product.price * product.quantity}₫</Text>
                </View>
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
        marginBottom: 10,
        marginTop: 20,
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
        marginTop: 35,
        marginLeft: 20
    },
    
    quantity: {
        marginTop: 80,
        right: 28,
        fontSize: 18,
        fontWeight: 'bold'
    },

    price: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 55,
        left: 90
    }
    
});