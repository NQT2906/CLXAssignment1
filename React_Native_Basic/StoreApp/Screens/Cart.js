import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import ProductInCart from '../components/ProductInCart.js'
import { connect } from 'react-redux'

class Cart extends Component {

    render() {
        console.log(this.props.cartItems.id)

        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <ProductInCart
                        product ={this.props.cartItems} />
                    : <Text>No items in your cart</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});