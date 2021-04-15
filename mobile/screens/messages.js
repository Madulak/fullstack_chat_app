import React, { useEffect, useState, } from 'react';
import { View, StyleSheet, Text, Dimensions, FlatList, TouchableOpacity, TextInput, Keyboard } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as chatActions from '../redux/actions/chatActions';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import { colors } from '../util';

import AllMessages from '../components/listMessages';

const { width, height } = Dimensions.get('window');

const messages = ({route, navigation}) => {

    const { id } = route.params;
    const dispatch = useDispatch();
    const receiverInfo = useSelector(state => state.chat.singleUser);
    const currentUser = useSelector(state => state.auth.username);
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([])

    useEffect(() => {
        dispatch(chatActions.get_single_user(id))
    },[]);

    const sendMessageHandler = () => {
        const data = {
            message,
            receiverId: receiverInfo._id,
        }
        if (message !== '') {
            // dispatch(chatActions.send_message(data));
            setAllMessages(sta => [...sta, message])
            setMessage('');
        }

        

    }

    return (
        <>
            {receiverInfo && 
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color={colors.primary} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <UserAvatar size={50} bgColor={colors.primary} name={receiverInfo.username} />
                        </TouchableOpacity>
                        
                        <View style={styles.usernameInfo}>
                            <Text>{receiverInfo.username}</Text>
                            <Text>last seen</Text> 
                        </View>
                    </View>

                    <View style={{flex: 0.12}} />
        
                    <View onPress={() => Keyboard.dismiss() } style={styles.messagesContainer}>
                        <AllMessages messages={allMessages} />
                    </View>

                    <View style={{flex: 0.12, }} />
        
                    <View style={styles.sendMessageContainer}>
                        <TouchableOpacity>
                            <UserAvatar bgColor={colors.primary} size={50} name={currentUser} />
                        </TouchableOpacity>

                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.inputText} 
                                multiline
                                onChangeText={e => setMessage(e)} 
                                value={message} 
                                placeholderTextColor={colors.primary}
                                placeholder='Send Message...' 
                            />
                            <TouchableOpacity style={styles.iconContainer} onPress={() => sendMessageHandler()}>
                                <Ionicons name="send-sharp" size={20} color={colors.primary} />
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
        // position:'absolute',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: 'white',
        width,
    },
    backButton: {
        paddingHorizontal: 10,
    },
    usernameInfo: {
        marginLeft: 10,
    },
    messagesContainer: {
        flex: 0.76,
        // backgroundColor: 'lime'
        // paddingVertical: 25, 
    },
    sendMessageContainer: {
        flex: 0.12, 
        // position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        zIndex: 10,
        backgroundColor: 'white',
    },
    textInputContainer: {
        flex: .95,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    inputText: {
        flex: 0.8,
        color: colors.primary,
    },
    iconContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default messages;