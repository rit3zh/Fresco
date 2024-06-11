import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category, Explore } from "@/screens";
import { View } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { colors } from "@/utils/constants";
const { Navigator, Screen } = createNativeStackNavigator();

export function ExploreStack() {
  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "Explore",
        headerLargeTitle: false,

        headerBlurEffect: "systemChromeMaterialDark",
        headerLargeStyle: {
          backgroundColor: "black",
        },
        headerLeft: () => (
          <View style={{ marginLeft: -10 }}>
            <DrawerToggleButton tintColor={colors._core} />
          </View>
        ),
      }}
    >
      <Screen name="Explore" component={Explore as any} />
      <Screen
        name="Category"
        component={Category as any}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
