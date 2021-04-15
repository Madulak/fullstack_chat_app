import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

import UserAvatar from 'react-native-user-avatar';
import { colors } from '../../util';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const userMessage = ({name, go_to_messages}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.avatarContainer}>
                <TouchableOpacity>
                    <UserAvatar size={50} bgColor={colors.primary} name={name} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.username}>{name}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={go_to_messages}>
                <AntDesign name="message1" size={24} color={colors.primary} />
            </TouchableOpacity>
        </TouchableOpacity>
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
        backgroundColor: colors.secondary,
        borderRadius: 10,
    },
    avatarContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        fontSize: 18,
        color: colors.primary,
        fontWeight: 'bold',
    }
})

export default userMessage;