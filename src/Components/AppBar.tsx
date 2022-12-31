import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const AppBar = () => {
    return (
        <SafeAreaView  >
            <StatusBar animated={true} backgroundColor={Colors.primary} />
            <View style={{ height: 10 }} />


        </SafeAreaView>
        // <StatusBar animated={true} backgroundColor={Colors.primary} />
    )
}

export default AppBar