import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

import UserAvatar from 'react-native-user-avatar';

const { width, height } = Dimensions.get('window');

const userMessage = ({name, go_to_messages}) => {

    return (
        <View style={styles.container}>
            <View>
                <UserAvatar size={100} name={name} />
                <View>
                    <Text>{name}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={go_to_messages}>
                <Text>Message</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.90,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        alignSelf: 'center',
    }
})

export default userMessage;