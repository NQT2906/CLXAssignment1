import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux'
import { render } from 'react-dom';

class ProductListItem extends Component{
    render() {
        return (
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{uri: this.props.product.image}}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{this.props.product.name}</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{this.props.product.price}</Text>
                            <TouchableOpacity onPress = {() => this.props.addItemToCart(this.props.product)} >
                                <Text style={styles.cartText}>Mua +</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {
        cartItems: store.getState().cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({type: 'ADD_TO_CART', payload: product})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);


const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc',
        backgroundColor: 'orange'
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