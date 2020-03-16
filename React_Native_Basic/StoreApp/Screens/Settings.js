import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, } from "react-native";

export default class Settings extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.img} source={{uri: 'https://imgur.com/OH656bu.jpg'}} />
                </View>
                <View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },

    container: {
        marginTop: 20,
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: 390,
        height: 150,
    },

    img: {
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