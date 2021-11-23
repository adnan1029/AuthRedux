import React, { useEffect } from "react";
import {
  StyleSheet, View, Image
  , ActivityIndicator
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home';
import Login from '../Components/login';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from "../Components/context";
import MainLayout from "../Components/MainLayout";

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const intialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.tokem,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.tokem,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, intialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (userName, password) => {
      console.log(userName, password)

      let userToken;
      userToken = null;

      if (userName == 'Atul' && password == 'Pass') {
        try {
          userToken = 'chiku'
          await AsyncStorage.setItem('userToken', userToken)
        } catch (error) {
          console.log(error)
        }

      } else {
        alert('invalid username or pass')
      }
      dispatch({ type: 'LOGIN', id: userName, tokem: userToken })
    },


    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (error) {
        console.log(error)
      }
      dispatch({ type: 'LOGOUT' })
    }
  }), []);


  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (error) {
        console.log(error)
      }
      dispatch({ type: 'RETRIEVE_TOKEN' ,tokem:userToken})
    }, 1000);
  }, []);


  if (loginState.isLoading == true) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

        {loginState.userToken == null ?
          <Login /> :
         <MainLayout/>
        }
      </NavigationContainer>

    </AuthContext.Provider>

  );
};


export default Navigation;