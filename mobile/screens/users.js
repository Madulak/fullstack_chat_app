import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as chatActions from '../redux/actions/chatActions';

import UserMessage from '../components/UI/userMessage';
import { colors } from '../util';

const users = ({navigation}) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.chat.users);

    useEffect(() => {
        dispatch(chatActions.get_users());
    },[])

    // console.log('[USERS] ', data);
    const navigate_to_message = (id) => {
        navigation.navigate('message_detail', {id: id})
    }

    return (
        <View style={styles.container}>
            <View style={styles.contactContainer}>
                <Text style={styles.contactsText}>Contacts</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <UserMessage go_to_messages={() => navigate_to_message(item._id)} name={item.username} />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    contactsText: {
        fontSize: 28,
        color: colors.primary,
        fontWeight: 'bold',
    },
    contactContainer: {
        marginHorizontal: 10,
    }
})

export default users;