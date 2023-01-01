
import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../Components/CustomButton';
import { useDispatch } from "react-redux";
import { AppDispatch } from '../app/store';
import { AsyncGetLogin } from '../Slices/LoginSlice';
import { MobileUserLoginResultModel } from '../Model/Login/MobileUserLoginResultModel';
import { MobileUserLoginRequestModel } from '../Model/Login/MobileUserLoginRequestModel';
import { useAppSelector } from '../app/hooks';

const LoginPage = (model: any) => {

    const dispatch = useDispatch<AppDispatch>();

    function refreshGrid() {
        dispatch(
            AsyncGetLogin({ mobilUserSirketAdi: "SirketAdi", mobilUserMobilNomre: "+994505053616", mobilUserPassword: "1882" } as MobileUserLoginRequestModel)
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            refreshGrid();
        };
        fetchData();
    }, []);

    const LoginSlice = useAppSelector((state) => state.LoginSlice);



    return (

        <View style={styles.container}>

            <SafeAreaView>
                <Text>naber</Text>
                <Text>naber</Text>
                <Text>naber</Text>
                <Text>naber</Text>
                <Text>naber</Text>

                <CustomButton title='Login'
                    onPress={() => { model.navigation.navigate('DashBoardPage') }}
                />

            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    form: {
        width: '80%',
        marginTop: 50,
    },
});


export default LoginPage

// import React from 'react';
//
//
//
//
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../Model/RootStackParamList';


// const screenWidth = Dimensions.get('window').width;


// const LoginPage: React.FC = () => {



//     return (
//         <View style={styles.container}>
//             <AppBar />
//             <SafeAreaView>
//                 <Text>naber</Text>
//                 <Text>naber</Text>
//                 <Text>naber</Text>
//                 <Text>naber</Text>
//                 <Text>naber</Text>
//                 <CustomButton title='Login'

//                     onPress={() => { }}




//                 />
//             </SafeAreaView>
//         </View>
//     );
// };


// export default LoginPage;