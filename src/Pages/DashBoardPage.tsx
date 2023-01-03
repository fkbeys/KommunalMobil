import { StackView } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import AppBar from '../Components/AppBar';
import CustomButton from '../Components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../app/hooks';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MobileUserLoginResultModel } from '../Model/Login/MobileUserLoginResultModel';


const DashBoardPage = (model: any) => {

    const LoginSlice = useAppSelector((state) => state.LoginSlice);

    const [value, setValue] = useState({} as MobileUserLoginResultModel);


    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem('userInfo') as string;
                let dx = JSON.parse(value) as MobileUserLoginResultModel;

                setValue(dx);
            } catch (e) {
                console.error(e);
            }
        }
        getData();
    }, []);



    return (

        <SafeAreaView>

            <AppBar clicked={() => { model.navigation.goBack(); }} />
            <Text>
                {/* {LoginSlice?.LoginList?.expiration} */}
                {value.expiration}
            </Text>

            <Text>
                test
            </Text>

        </SafeAreaView>

    )
}

export default DashBoardPage