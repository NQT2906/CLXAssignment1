import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class SettingInfo extends Component
{   
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: "",
            email: "",
            phone: "",
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

    showRegister = () => {
        this.refs.register.instance.show();
    }
    
    showLogin = () => {
        this.refs.login.instance.show();
    }
    
    hideLogin = () => {
        this.refs.login.instance.hide();
    }

    render() {
        return (
            <View>
                <View style = {styles.container}>
                    <View>
                        <TouchableOpacity>
                            <Text style = {styles.buttonLogin}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {styles.buttonSignUp}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style = {styles.categoryImage} source = {{uri: 'https://imgur.com/OH656bu.jpg' }} />
                    <Text style = {styles.title}>123</Text>
                </View>
                <View style = {styles.container}>
                    <Image style = {styles.categoryImage} source = {{uri: 'https://imgur.com/OH656bu.jpg' }} />
                    <Text style = {styles.title}>123</Text>
                </View>
            </View>
        );  
    }
}



const styles = StyleSheet.create({
    container:
    {
        alignItems: 'center',
        padding: 16,
        elevation: 1,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0},
        marginBottom: 0
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
    buttonSignUp: {
        fontSize: 20,
        color: '#2f95dc',
        marginLeft: 300,
        marginBottom: 10,
        width: 80
    },
    buttonLogin: {
        fontSize: 20,
        color: '#2f95dc',
        marginLeft: 308,
        marginBottom: 10,
        width: 80
    }
})