
import React from 'react'
import { Provider } from 'react-redux'
import MainPage from './MainPage';
import { store } from './src/app/store';


const App = () => {

  return (



    <Provider store={store} >

      <MainPage />

    </Provider >

  )
}

export default App

