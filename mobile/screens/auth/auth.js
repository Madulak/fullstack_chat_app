import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as authActions from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { colors } from '../../util';

import * as SecureStore from 'expo-secure-store';

const auth = ({navigation}) => {

    
    const dispatch = useDispatch();

    useEffect(() => {
        getAuth();
    },[])

    const getAuth = async () => {
        const getSavedpasswords = await SecureStore.getItemAsync('user_session')
        const authData = JSON.parse(getSavedpasswords)
        console.log('[HELLO] ', authData.email);
        
        if (getSavedpasswords) {
            dispatch(authActions.login(authData));
        }
        
    }


    return (
        <View style={styles.container}>
            

                <>
                    <View>
                        <Text style={styles.welcomeText}>Welocome to T-Chat</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('signup')} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Signup</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity> 
                </>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    welcomeText: {
        color: colors.primary,
    },
    buttonContainer: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: colors.primary,
    },
    buttonText: {
        color: 'white',
    }
})

export default auth;