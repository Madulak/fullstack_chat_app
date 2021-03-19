import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity, Touchable } from 'react-native';

import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/actions/authActions';

const { width, height } = Dimensions.get('window');

const login = ({navigation}) => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginHandler = () => {
        const data = {
            email,
            password
        }
        dispatch(authActions.login(data));
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.signupText}>Login</Text>
                

                <View style={styles.textInputContainer}>
                    <TextInput  
                        placeholder='email'
                        onChangeText={e => setEmail(e)}
                        value={email}
                        style={styles.textInput}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                </View>

                <View style={styles.textInputContainer}>
                    <TextInput  
                        placeholder='password'
                        onChangeText={e => setPassword(e)}
                        value={password}
                        style={styles.textInput}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                </View>

                <TouchableOpacity onPress={loginHandler} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('signup')} style={styles.alreadyAccount}>
                    <Text style={styles.alreadyText}>Already have an account I want to Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'purple',
    },
    formContainer: {
        width: width * 0.90,
        padding: 10,
    },
    textInputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        marginVertical: 10,
    },
    textInput: {
        padding: 5,
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    alreadyAccount: {
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    alreadyText: {
        fontSize: 18,
        color: 'darkblue',
    }
})

export default login;