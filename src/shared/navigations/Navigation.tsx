import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigator } from "@/flow";
import { EntryStack } from "@/flow/stacks/Entry";

const { Screen, Navigator } = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          ...DarkTheme.colors,
        },
        dark: true,
      }}
    >
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="EntryStack" component={EntryStack} />
        <Screen name="HomeStack" component={DrawerNavigator} />
      </Navigator>
    </NavigationContainer>
  );
}
