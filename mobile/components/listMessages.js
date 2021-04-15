import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { colors } from '../util';

const { width, height } = Dimensions.get('window');

const messages = ({messages}) => {

    const ref = useRef();

    useEffect(() => {
        
            if (messages.length > 3) {
                ref?.current.scrollToIndex({
                    index: 1,
                })
            }
        
    }, [messages.length])

    return (
        <View style={styles.container}>
            <FlatList 
                ref={ref}
                data={messages}
                keyExtractor={item => item}
                // inverted
                renderItem={({item}) => {

                    return (
                        <View >
                            <View style={styles.messagesContainer}>
                                <Text >{item}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 5,
    },
    messagesContainer: {
        paddingHorizontal: 10,
        backgroundColor: colors.secondary,
        paddingVertical: 7,
        borderRadius: 10,
        maxWidth: width * 0.80,
        marginTop: 7,
        
    }
})

export default messages;