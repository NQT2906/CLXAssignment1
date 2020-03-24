import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, AsyncStorage} from "react-native";
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

    UNSAFE_componentWillMount() {
        this.getItemStorage('userName').then(result => this.setState({userName: result}))
        this.getItemStorage('email').then(result => this.setState({email: result}))
        this.getItemStorage('signIn').then(result => this.setState({signIn: result}))
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                {this.state.signIn === 'false' ?
                    <View  style = {styles.containerSign}>
                        <TouchableOpacity onPress = {() => navigation.navigate('SignIn')}  style = {styles.button} >
                            <Text style = {styles.btnText}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}  style = {styles.button}>
                            <Text style = {styles.btnText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        <View style = {styles.container}>
                            <Image style = {styles.categoryImage} source = {{uri: 'https://imgur.com/OH656bu.jpg' }} />
                            <Text style = {styles.title}>Your user name: {this.state.userName}</Text>
                            <Text style = {styles.title}>Your email: {this.state.email}</Text>
                            <Text style = {styles.title}>Your ID: 123456789</Text>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

    containerSign:{
        backgroundColor: '#FFF',
        height: 800,
    },

    container:
    {
        alignItems: 'center',
        padding: 16,
        elevation: 1,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        marginBottom: 16,
        height: 800
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
        marginLeft: 145,
        marginTop: 50,
        top: 190,
        textAlign: 'center',
        width: 110,
        backgroundColor: '#fafafa',
    },
    btnText: {
        fontSize: 32,
        color: '#2f95dc',
    }

});