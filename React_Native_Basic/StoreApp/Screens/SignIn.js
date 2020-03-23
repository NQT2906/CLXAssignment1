import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native'

export default class SignIn extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            signIn: ''
        }
    }

    async setItemStorage(key, value) {
        await AsyncStorage.setItem(key, value);
    };

    async getItemStorage(key) {   
        try {     
            return await AsyncStorage.getItem(key); 
        } 
        catch (error) {   
            console.log('Read data error!')
        }
    };

    signIn(name, pass) {
        this.setItemStorage('signIn', 'true')
        let userName = this.getItemStorage('userName')
        let password = this.getItemStorage('password')
        const { navigation } = this.props;
        {userName === name && password === pass ?
            navigation.navigate('Settings')
            : alert('Wrong Password or UserName!')
        }
    }
    
    render() {
        return (
            <View style = {styles.signIn}>
                <Text style = {styles.header}>Sign in</Text>
                <TextInput style = {styles.textInput} placeholder = "Your name" underlineColorAndroid ={'transparent'}
                onChangeText = {text => this.setState({userName: text}) }/>

                <TextInput style = {styles.textInput} placeholder = "Your password" 
                secureTextEntry={true} underlineColorAndroid ={'transparent'}
                onChangeText = {text => this.setState({password: text}) }/>

                <TouchableOpacity style = {styles.button} onPress = {() => this.signIn(this.state.userName, this.state.password)}>
                    <Text style = {styles.btnText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signIn: {
        alignSelf: 'stretch',
        backgroundColor: '#59cbbd'
    },

    header: {
        fontSize: 24,
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
    },

    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1,
    },

    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 15,
    },

    btnText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold'
    }   
})