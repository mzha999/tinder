import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-rn'

const SenderMessage = ({message}) => {
    return (
        <View style={[tw("bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2"),{alignSelf: "flex-start"}]}>
            <Text style={tw("text-white")}>{message.messages}</Text>
        </View>
    )
}

export default SenderMessage

const styles = StyleSheet.create({})
