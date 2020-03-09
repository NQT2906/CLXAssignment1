import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux'

function ProductListItem (props){
    const { product, addItemToCart } = props;
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: product.image}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{product.price}</Text>
                        <TouchableOpacity onPress = {() => addItemToCart(product)} >
                            <Text style={styles.cartText}>Mua +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

// const mapStateToProps = () => {
//     return {
//         car
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({type: 'ADD_TO_CART', payload: product})
    }
}

export default connect(null, mapDispatchToProps)(ProductListItem);


const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },

    shadow: {
        elevation: 1,
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