import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button} from "react-native";
import ItemInOrder from '../components/ItemInOrder.js'
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native-gesture-handler";

class Orders extends Component {

    render() {
        const totalPrice = this.props.orderItems.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0)
        return (
            <View style={styles.container}>
                {this.props.orderItems.length > 0 ?
                   <ScrollView>
                       <Text>Order:</Text>
                        {Object.values(this.props.orderItems).map( cart => (
                            <ItemInOrder product = {cart} />
                        ))}
                    <View style = {styles.totalContainer}>
                        <Text style = {styles.totalInside}>Total: {totalPrice}₫</Text>
                    </View>
                    </ScrollView>
                    // <FlatList 
                    //     data = {Object.values(this.props.cartItems)}
                    //     renderItem = {({item}) => <ProductInCart product = {item} />}
                    //     keyExtractor = {item => '${item.id}'}
                    //      />
                    : <Text>No items in your orders</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {
        orderItems: store.getState().orderItems
    }
}


export default connect(mapStateToProps)(Orders);

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