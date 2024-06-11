import React from "react";
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Details, Discovery } from "@/screens";
import { PlatformColor } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const { Navigator, Screen } = createSharedElementStackNavigator();

export function SharedDiscoveryStack(props: NativeStackHeaderProps) {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: PlatformColor("systemGroupedBackgroundColor") as any,
        },
        headerShown: false,
      }}
    >
      <Screen
        name={"Discovery"}
        component={Discovery as any}
        options={{
          headerTitle: "Discovery",
        }}
      />
      <Screen
        name="Details"
        component={Details as any}
        options={{
          headerTitle: "Details",
        }}
        sharedElements={(route) => [route.params.data.id]}
      />
    </Navigator>
  );
}
