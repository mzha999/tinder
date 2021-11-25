import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const ChatScreen = () => {
    return (
        <SafeAreaView>
            <Header title="Chat" />
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
