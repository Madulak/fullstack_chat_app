import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, FlatList, TouchableOpacity, TextInput } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as chatActions from '../redux/actions/chatActions';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import { useState } from 'react/cjs/react.development';

const { width, height } = Dimensions.get('window');

const messages = ({route, navigation}) => {

    const { id } = route.params;
    const dispatch = useDispatch();
    const receiverInfo = useSelector(state => state.chat.singleUser);
    const currentUser = useSelector(state => state.auth.username);
    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(chatActions.get_single_user(id))
    },[]);

    const sendMessageHandler = () => {
        const data = {
            message,
            receiverId: receiverInfo._id,
        }
        dispatch(chatActions.send_message(data));
        setMessage('');
    }

    return (
        <>
            {receiverInfo && 
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>

                        <View>
                            <UserAvatar size={50} name={receiverInfo.username} />
                        </View>
                        
                        <View>
                            <Text>{receiverInfo.username}</Text>
                            <Text>last seen</Text>
                        </View>
                    </View>
        
                    <View style={styles.messagesContainer}>
                        
                    </View>
        
                    <View style={styles.sendMessageContainer}>
                        <View>
                            <UserAvatar size={50} name={currentUser} />
                        </View>

                        <View style={styles.textInputContainer}>
                            <TextInput onChangeText={e => setMessage(e)} value={message} placeholder='Send Message...' />
                            <TouchableOpacity onPress={() => sendMessageHandler()}>
                                <Ionicons name="send-sharp" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        flex: 0.12,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    backButton: {
        paddingHorizontal: 10,
    },
    messagesContainer: {
        flex: 0.76,
    },
    sendMessageContainer: {
        flex: 0.12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default messages;