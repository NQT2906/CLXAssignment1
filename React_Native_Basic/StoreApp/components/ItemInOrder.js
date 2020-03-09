import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import { connect } from 'react-redux'

function ProductInCart (props){
    const { product, addItemToCart, removeItemFromCart } = props;
    return (
        <View style = {styles.shadow}>
            <View style = {styles.container}>
                <View>
                    <Image style={styles.img} source={{uri: product.image}}/>
                </View>
                <View>
                    <Text style = {styles.name}>{product.name}</Text>
                </View>
                <View style = {styles.quantity} >
                    <TouchableOpacity onPress = {() => {
                        removeItemFromCart(product)}}>
                        <Text style = {styles.quantityButton}>-</Text>
                    </TouchableOpacity>
                    <Text style = {styles.quantityProduct}>{product.quantity}</Text>
                    <TouchableOpacity onPress = {() => addItemToCart(product)}>
                        <Text style = {styles.quantityButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.priceRow}>
                    <Text style = {styles.price}>{product.price*product.quantity}₫</Text>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({type: 'ADD_TO_CART', payload: product}),
        removeItemFromCart: (product) => dispatch({type: 'REMOVE_FROM_CART', payload: product})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInCart);

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