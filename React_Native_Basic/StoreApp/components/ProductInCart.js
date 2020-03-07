import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux'

function ProductInCart (props){
    const { product } = props;
    return (
        <View>
            <Text>{product.species}</Text>
        </View>
    );
}

export default ProductInCart;

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

//export default connect(mapStateToProps)(ProductInCart);


const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },

    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },

    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },

    img: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    
    name: {
        fontSize: 16,
        marginBottom: 8
    },

    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
});