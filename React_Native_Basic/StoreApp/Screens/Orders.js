import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button} from "react-native";
import CartInOrder from '../components/CartInOrder'
import { connect } from 'react-redux'

class Orders extends Component {

    render() {
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
                    : <Text>No items in your orders</Text>
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