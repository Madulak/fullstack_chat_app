import React, { useEffect } from 'react';
import {  View, StyleSheet, Text } from 'react-native';


const homescreen = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text>Home Screen!!</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    
})

export default homescreen;