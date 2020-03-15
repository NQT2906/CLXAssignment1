import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button, AsyncStorage} from "react-native";
import ProductInCart from '../components/ProductInCart.js'
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native-gesture-handler";

class Cart extends Component {

    setItemStorage = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
            console.log('Saving data success!')
        } 
        catch (error) {
            console.log('Saving data error!')
        }
    };

    getItemStorage = async (key) => {   
        try {     
            const value = await AsyncStorage.multiGet(key); 
            if (value !== null) {       
                return Json.parse(value);
            }
            else {
                console.log('Read data error!')
            }   
        } 
        catch (error) {   
            console.log('Read data error!')
        }
    };
    
    saveStorage = (value) => {

        this.setItemStorage('value', value);
    }

    readStorage = () => {
        return this.getItemStorage('value');
    }

    
    render() {
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
                            <TouchableOpacity onPress = {this.saveStorage("123")}>
                                <Text style = {{marginBottom: 50}}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.readStorage}>
                                <Text>Read</Text>
                            </TouchableOpacity>
                        </View>
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

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
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