import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DashBoardPage from './src/Pages/DashBoardPage'
import LoginPage from './src/Pages/LoginPage'
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { useAppSelector } from './src/app/hooks'
import { ThemeProvider, createTheme } from '@rneui/themed';


const MainPage = () => {

    const Stack = createStackNavigator();

    const selectedTheme = useAppSelector(state => state.ThemeSlice.currentTheme ? DefaultTheme : DarkTheme);
    const theme = createTheme({
        lightColors: {
            primary: '#e7e7e8',
        },
        darkColors: {
            primary: '#000',
        },
        mode: 'light',
    });


    return (

        <ThemeProvider theme={theme}>
            <NavigationContainer  >
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginPage" >

                    <Stack.Screen component={LoginPage} name="LoginPage" />
                    <Stack.Screen component={DashBoardPage} name="DashBoardPage" />

                </Stack.Navigator >


            </NavigationContainer >

        </ThemeProvider>
    )
}

export default MainPage

