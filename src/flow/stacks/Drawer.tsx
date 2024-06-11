import { createDrawerNavigator } from "@react-navigation/drawer";
import Bottom from "./Bottom";
import DrawerContent from "../content/DrawerContent";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/utils/constants";
import { ExploreStack, ProfileStack } from "@/core/route";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {},
        drawerHideStatusBarOnOpen: true,
        sceneContainerStyle: {},
        overlayColor: "transparent",
        drawerActiveTintColor: colors._core,
        drawerLabelStyle: {
          color: "#fff",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MainStack"
        component={Bottom as any}
        options={{
          headerShown: false,
          title: "Home",

          drawerIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              style={{ left: 10 }}
              color={"white"}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="MainExploreStack"
        component={ExploreStack}
        options={{
          headerShown: false,
          title: "Explore",

          drawerIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={22}
              style={{ left: 10 }}
              color={"white"}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="MainProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          title: "Settings",

          drawerIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={22}
              style={{ left: 10 }}
              color={"white"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
