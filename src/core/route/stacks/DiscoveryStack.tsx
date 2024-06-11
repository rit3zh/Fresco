import React, { useLayoutEffect, useState } from "react";
import { Details, Discovery } from "@/screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { HeaderButtons } from "@/components/index";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { View } from "react-native";
import { colors } from "@/utils/constants";
const { Navigator, Screen } = createSharedElementStackNavigator();
export function DiscoveryStack() {
  return (
    <Navigator>
      <Screen
        name={"Discovery"}
        component={Discovery}
        options={{
          headerTitle: "Discovery",
          headerBackTitleVisible: true,
          headerTitleStyle: {
            fontWeight: "800",
          },
          headerRight: () => (
            <>
              <HeaderButtons.RightButton />
            </>
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <DrawerToggleButton tintColor={colors._core} />
            </View>
          ),
        }}
      />
      <Screen
        name="Details"
        component={Details as any}
        options={{
          headerTitle: "Details",
          headerShown: false,
        }}
        sharedElements={(route) => [route.params.data.id]}
      />
    </Navigator>
  );
}
