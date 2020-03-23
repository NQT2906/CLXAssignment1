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
            signIn: 'false'
        }
    }

    async getItemStorage(key) {   
        try {     
            return await AsyncStorage.getItem(key); 
        } 
        catch (error) {   
            console.log('Read data error!')
        }
    };

    render() {
        const { navigation } = this.props;
        this.getItemStorage('userName').then(result => this.setState({userName: result}))
        this.getItemStorage('email').then(result => this.setState({email: result}))
        this.getItemStorage('signIn').then(result => this.setState({signIn: result}))
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
                            <Text style = {styles.title}>{this.state.userName}</Text>
                            <Text style = {styles.title}>{this.state.email}</Text>
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