import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button, AsyncStorage} from "react-native";
import ProductInCart from '../components/ProductInCart.js'
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native-gesture-handler";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartArr: [],
        }
    }

    async setItemStorage(cart) {
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
    };

    async getItemStorage() {   
        try {     
            let cart = await AsyncStorage.getItem('cart'); 
            let parsed = await JSON.parse(cart)
            this.setState({cartArr: parsed})
            return parsed;
        } 
        catch (error) {   
            console.log('Read data error!')
        }
    };
    
    UNSAFE_componentWillMount() {
        this.getItemStorage()
    }

    render() { 
        if(this.props.cartItems.length !== 0 && this.state.cartArr.length === 0) {
            this.setItemStorage(this.props.cartItems)
            this.getItemStorage()
        }
        else if(this.props.cartItems.length === 0 && this.state.cartArr.length !== 0) {
            this.props.cartItems = this.state.cartArr
        }
        
        const totalPrice = this.props.cartItems.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0)

        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <ScrollView>
                        {(this.props.cartItems).map( product => (
                            <ProductInCart key = {product.id} product = {product} />
                        ))}
                    </ScrollView>
                    : <View>
                        <Text>No items in your cart</Text>
                    </View>
                }
                {this.props.cartItems.length > 0 ?  
                <View style = {styles.totalContainer}>
                    <Text style = {styles.totalInside}>Total: {totalPrice}₫</Text>
                    <TouchableOpacity onPress = {() => {
                        this.props.addCartToOrder(this.props.cartItems),
                        this.props.deleteFromCart(this.props.cartItems),
                        this.setState({cartArr: []}),
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

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch({type: "ADD_TO_CART", payload: product}),
        addCartToOrder: (product) => dispatch({type: 'ADD_TO_ORDER', payload: product}),
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