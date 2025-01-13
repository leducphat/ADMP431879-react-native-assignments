import React, {useEffect, useState} from 'react';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [getItem, setItem] = useAsyn
  useEffect(() => {
    const timeout = setTimeout(() =>{
      setIsShowSplash(false);
    },1500);
    return () => clearTimeout(timeout);
  },[]);
  return (
    <>
    <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
    {
      !isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )
    }
    </>
  );
};

export default App;