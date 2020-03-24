import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native'

export default class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
        }
    }

    async setItemStorage(key, value) {
        await AsyncStorage.setItem(key, value);
    };



    render() {
        const { navigation } = this.props;
        return (
            <View style = {styles.SignUp}>
                <Text style = {styles.header}>Sign up</Text>
                <TextInput style = {styles.textInput} placeholder = "Your name" underlineColorAndroid ={'transparent'}
                onChangeText = {text => this.setItemStorage('userName', text) }/>

                <TextInput style = {styles.textInput} placeholder = "Your email" underlineColorAndroid ={'transparent'}
                onChangeText = {text => this.setItemStorage('email', text)}/>

                <TextInput style = {styles.textInput} placeholder = "Your password" 
                secureTextEntry={true} underlineColorAndroid ={'transparent'}
                onChangeText = {text => this.setItemStorage('password', text) }/>

                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Settings')}>
                    <Text style = {styles.btnText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SignUp: {
        alignSelf: 'stretch',
        backgroundColor: '#59cbbd'
    },

    header: {
        fontSize: 24,
        color: "#fff",
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
        marginTop: 30,
    },
    
    btnText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold'
    }   
})