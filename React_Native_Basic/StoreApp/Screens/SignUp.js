import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

export default class SignUp extends Component {
    
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
        return (
            <View style = {styles.SignUp}>
                <Text style = {styles.header}>Sign up</Text>
                <TextInput style = {styles.textInput} placeholder = "Your name" underlineColorAndroid ={'transparent'}/>

                <TextInput style = {styles.textInput} placeholder = "Your email" underlineColorAndroid ={'transparent'}/>

                <TextInput style = {styles.textInput} placeholder = "Your password" 
                secureTextEntry={true} underlineColorAndroid ={'transparent'}/>

                <TouchableOpacity style = {styles.button}>
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