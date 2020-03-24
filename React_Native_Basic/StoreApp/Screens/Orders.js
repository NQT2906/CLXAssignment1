import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button, Image, AsyncStorage} from "react-native";
import CartInOrder from '../components/CartInOrder'
import { connect } from 'react-redux'

class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderArr: [],
        }
    }

    async setItemStorage(order) {
        try {
            await AsyncStorage.setItem('order', JSON.stringify(order));
        }
        catch(error) {
            console.log('Set data error!')
        }
    };

    async getItemStorage() {   
        try {     
            let order = await AsyncStorage.getItem('order'); 
            let parsed = await JSON.parse(order)
            await this.setState({orderArr: parsed})
            return parsed;
        } 
        catch (error) {   
            console.log('Read data error!')
        }
    };

    UNSAFE_componentWillMount() {
        this.getItemStorage()
        this.props.orderItems = this.state.orderArr.slice();
    }

    render() {
        this.setItemStorage(this.props.orderItems)
        return (
            <View style={styles.container}>
                {this.props.orderItems.length > 0 ?
                   <ScrollView>
                        { this.props.orderItems.map( cartItem => (
                            <CartInOrder cartItem= {cartItem} />
                        ))}
                    </ScrollView>
                    // <FlatList 
                    //     data = {Object.values(this.props.cartItems)}
                    //     renderItem = {({item}) => <ProductInCart product = {item} />}
                    //     keyExtractor = {item => '${item.id}'}
                    //      />
                    : <View>
                        <Text>No items in your orders</Text>
                    </View>
                }
                </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orderItems: state.orderItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCartToOrder: (product) => dispatch({type: 'ADD_TO_ORDER', payload: product}),
        deleteFromCart: (product) => dispatch({ type: 'DELETE_FROM_CART', payload: product})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

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