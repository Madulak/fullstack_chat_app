import React, { useEffect } from 'react';
import {  View, StyleSheet, Text } from 'react-native';
import { colors } from '../util';


const homescreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.headerFeed}>
                <Text style={styles.headerText}>Feed</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerFeed: {
        marginHorizontal: 10
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
    }
})

export default homescreen;