import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import DashBoardPage from './src/Pages/DashBoardPage'
import LoginPage from './src/Pages/LoginPage'
import { useFonts } from 'expo-font'


const App = () => {


  const Stack = createStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors
      , background: "transparent"
    }

  };

  const [loaded] = useFonts(
    {
      InterBold: require("./src/assets/Fonts/Inter-Bold.ttf"),
      InterSemiBold: require("./src/assets/Fonts/Inter-SemiBold.ttf"),
      InterMedium: require("./src/assets/Fonts/Inter-Medium.ttf"),
      InterRegular: require("./src/assets/Fonts/Inter-Regular.ttf"),
      InterLight: require("./src/assets/Fonts/Inter-Light.ttf"),
    }
  );

  if (!loaded) return null;

  return (



    <NavigationContainer theme={theme}>

      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginPage" >

        <Stack.Screen component={LoginPage} name="LoginPage " />
        <Stack.Screen component={DashBoardPage} name="DashboardPage " />

      </Stack.Navigator >

    </NavigationContainer>


  )
}

export default App
