

import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import CustomButton from '../Components/CustomButton';
import { temaDegistir } from '../Slices/ThemeSlice';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Icon } from '@rneui/themed';


const LoginPage = (model: any) => {


    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <SafeAreaView>
            <CustomButton title='naber' onPress={() => { dispatch(temaDegistir("")) }} />

            <Button>Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
            <Input

                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={<Icon
                    name='rowing'
                    size={24}
                    color='black'
                />
                }
            />

        </SafeAreaView>
    )


}




export default LoginPage
