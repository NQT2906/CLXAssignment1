import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import ProductListItem from '../components/ProductListItem.js'
import { connect } from 'react-redux'

class Cart extends Component {

    render() {
        console.log(this.props.cartItems)

        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <ProductListItem
                        onPress={this.props.removeItem}
                        products={this.props.cartItems} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});