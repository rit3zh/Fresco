import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "@/screens";
const { Navigator, Screen } = createNativeStackNavigator();

export function ProfileStack() {
  return (
    <Navigator>
      <Screen
        name={"Profile"}
        component={Profile as any}
        options={{
          headerTransparent: true,
          headerTitle: "Settings",
          headerLargeTitle: true,
          headerBlurEffect: "systemChromeMaterialDark",
          headerLargeStyle: {
            backgroundColor: "black",
          },
        }}
      />
    </Navigator>
  );
}
