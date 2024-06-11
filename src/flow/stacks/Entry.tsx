import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { OnBoarding, Entry, Login, Signup, ForgotPassword } from "@/screens";

const { Screen, Navigator } = createNativeStackNavigator();
export function EntryStack() {
  return (
    <Navigator>
      {/* <Screen
        name="OnBoarding"
        component={OnBoarding as any}
        options={{ headerShown: false }}
      /> */}
      {/* <Screen
        name="EntryScreen"
        component={Entry}
        options={{ headerShown: false }}
      /> */}

      {/* <Screen
        name="Login"
        component={Login as any}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      /> */}
      {/* <Screen
        name="Signup"
        component={Signup as any}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      /> */}

      <Screen
        name="ForgotPassword"
        component={ForgotPassword as any}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
    </Navigator>
  );
}
