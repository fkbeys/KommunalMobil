import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import DashBoardPage from './src/Pages/DashBoardPage'
import LoginPage from './src/Pages/LoginPage'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import { store } from './src/app/store';

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


    <Provider store={store} >


      <NavigationContainer theme={theme}    >

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginPage" >

          <Stack.Screen component={LoginPage} name="LoginPage" />
          <Stack.Screen component={DashBoardPage} name="DashBoardPage" />

        </Stack.Navigator >

      </NavigationContainer>
    </Provider>

  )
}

export default App
