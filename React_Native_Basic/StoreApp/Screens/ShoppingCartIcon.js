import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ShoppingCartIcon = (props) => (
    <View style = {{padding : 5}}>
        <Ionicons name="ios-cart"  size={36} color = {focused ? color.ACTIVE : color.INACTIVE}/>
        <View style = {{
            position: "absolute", height: 30, width: 30, borderRadius: 15,
            backgroundColor: '#rgba(95,197,123,0.8)', right: -15, bottom: 15, alignItems: 'center',
            justifyContent: 'center', zIndex: 2000
        }}>
            <Text style = {{color: 'white', fontWeight: 'bold'}}>{this.props.cartItems}</Text>
        </View>
    </View>
)

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(null, mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});