import React, { useLayoutEffect } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { DiscoveryStack, ExploreStack, ProfileStack } from "@/core/route";
import { TabBarIcon } from "@/utils/helper/TabBarOptions";
import { BlurView } from "expo-blur";
import { TabBar } from "@/enums/TabBarEnum";
import { FontAwesome6 } from "@expo/vector-icons";
import { EventRegister } from "react-native-event-listeners";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { AnimatedFade } from "@/components";

const { Navigator, Screen } = createBottomTabNavigator();

const TabBarBackground = () => (
  <BlurView
    intensity={90}
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
    }}
  />
);

const Bottom: React.FC<NativeStackHeaderProps> = ({
  navigation,
}: NativeStackHeaderProps) => {
  const [name, setName] = React.useState<string>();
  return (
    <Navigator
      screenOptions={({ route }) => {
        return {
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: { position: "absolute" },
          tabBarInactiveTintColor: TabBar.InActiveTintColor,
          tabBarActiveTintColor: TabBar.ActiveTintColor,
          tabBarBackground: TabBarBackground,
          unmountOnBlur: false,
        };
      }}
      tabBar={(props) => (
        <AnimatedFade visible={name === "Details" ? false : true}>
          <BottomTabBar {...props} />
        </AnimatedFade>
      )}
    >
      <Screen
        name="DiscoveryStack"
        component={DiscoveryStack}
        options={({ navigation, route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);

          setName(routeName);
          return {
            title: "Discovery",
            tabBarIcon: ({ focused, size }) => (
              <TabBarIcon
                name={focused ? "cube" : "cube-outline"}
                focused={focused}
                size={size}
              />
            ),
          };
        }}
      />
      <Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome6
              name="cubes-stacked"
              size={size}
              color={
                focused ? TabBar.ActiveTintColor : TabBar.InActiveTintColor
              }
            />
          ),
        }}
      />
      <Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, size }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              focused={focused}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  );
};
export default Bottom;
