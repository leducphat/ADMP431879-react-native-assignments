import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import About from "./screens/About";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Account from "./screens/Account/Account";
import Profile from "./screens/Account/Profile";
import Dashboard from "./screens/Admin/Dashboard";


//routes
const Stack = createNativeStackNavigator();

export default function Main() {
  // const [isAuth, setIsAuth] = useState(null);
  // // get user
  // useEffect(() => {
  //   const getUserLocalData = async () => {
  //     let data = await AsyncStorage.getItem("@auth");
  //     setIsAuth(data);
  //     //   let loginData = JSON.parse(data);
  //     console.log("user login data ==>", data);
  //   };
  //   getUserLocalData();
  // }, []);

// isAuth = true for testing purposes only
  const isAuth = true;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen name="productDetails" component={ProductDetails} /> */}
          {/* <Stack.Screen name="checkout" component={Checkout} /> */}
          {/* <Stack.Screen name="myorders" component={MyOrders} /> */}
          <Stack.Screen name="home" component={Home} />
          {/* <Stack.Screen name="notifications" component={Notifications} /> */}
          <Stack.Screen name="adminPanel" component={Dashboard} />
          {/* <Stack.Screen name="payment" component={Payments} /> */}
          <Stack.Screen name="account" component={Account} />
          {/* <Stack.Screen name="cart" component={Cart} /> */}
          <Stack.Screen name="mobile" component={About} />

          {!isAuth && (
            <>
              <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="register"
                component={Register}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
