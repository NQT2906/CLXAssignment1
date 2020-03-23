import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import SignUp from './SignUp'
import SignIn from './SignIn'


export default class Settings extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
            created: false
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

    

    render() {
        const { navigation } = this.props;
        return (
            <View>
                {this.state.created === false ?
                    <View  style = {styles.container}>
                        <TouchableOpacity onPress = {() => navigation.navigate('SignIn')} >
                            <Text style = {styles.button}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>
                            <Text style = {styles.button}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    :<View>
                        <View style = {styles.container}>
                            <Image style = {styles.categoryImage} source = {{uri: 'https://imgur.com/OH656bu.jpg' }} />
                            <Text style = {styles.title}>123</Text>
                        </View>
                    </View>
                }
            </View>
        );  
    }
}

const styles = StyleSheet.create({

    container:
    {
        height: 100,
        top: 200
    },
    categoryImage:
    {
        width: 120,
        height: 120
    },
    title:
    {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    button: {
        fontSize: 20,
        color: '#2f95dc',
        marginLeft: 145,
        marginTop: 50,
        textAlign: 'center',
        width: 110,
        fontSize: 32,
        backgroundColor: '#fafafa',
    },

});