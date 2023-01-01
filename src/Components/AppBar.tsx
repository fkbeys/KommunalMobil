import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'


interface model {

    clicked: Function
}

const AppBar = (model: model) => {

    return (
        <View  >
            <CustomButton title='Back' onPress={() => { model.clicked(); }} />


        </View>
    )
}

export default AppBar