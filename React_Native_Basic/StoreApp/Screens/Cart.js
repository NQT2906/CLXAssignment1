import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button} from "react-native";
import ProductInCart from '../components/ProductInCart.js'
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native-gesture-handler";

class Cart extends Component {

    render() {
        const totalPrice = this.props.cartItems.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0)
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                   <ScrollView>
                        {Object.values(this.props.cartItems).map( product => (
                            <ProductInCart key = {product.id} product = {product} />
                        ))}
                    </ScrollView>
                    // <FlatList 
                    //     data = {Object.values(this.props.cartItems)}
                    //     renderItem = {({item}) => <ProductInCart product = {item} />}
                    //     keyExtractor = {item => '${item.id}'}
                    //      />
                    : <Text>No items in your cart</Text>
                }
                {this.props.cartItems.length > 0 ?  
                <View style = {styles.totalContainer}>
                    <Text style = {styles.totalInside}>Total: {totalPrice}₫</Text>
                    <TouchableOpacity onPress = {() => {
                        this.props.addCartToOrder(this.props.cartItems),
                        this.props.deleteFromCart(this.props.cartItems),
                        alert('Đặt hàng thành công')
                        }}>
                        <Text style = {styles.totalPay}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
                : <View></View>
                }
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {
        cartItems: store.getState().cartItems,
        orderItems: store.getState().orderItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCartToOrder: (cart) => dispatch({type: 'ADD_TO_ORDER', payload: cart}),
        deleteFromCart: (product) => dispatch({ type: 'DELETE_FROM_CART', payload: product})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    totalContainer: {
        marginBottom: 10,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'stretch',
        width: 400,
        height: 100,
    },

    totalInside: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 27,
        marginLeft: 20,
    },

    totalPay: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 20,
        color: 'white',
        backgroundColor: 'orange'
    }

});