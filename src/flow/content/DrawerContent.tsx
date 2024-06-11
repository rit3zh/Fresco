import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Props } from "./types";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HStack, Text as SwiftText, getColor } from "swiftui-react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FastImage from "react-native-fast-image";
import { PROFILE, colors } from "@/utils/constants";
import SearchBar from "react-native-search-bar";
import { hasDynamicIsland } from "react-native-device-info";

const DrawerContent: React.FC<Props> = ({
  ...props
}: Props): React.ReactNode => {
  const user = PROFILE;
  const gray = getColor("gray");
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.topContentContainer}>
          <View style={styles.topContainer}>
            <FastImage source={{ uri: user.avatar }} style={styles.image} />
            <View style={styles.vStack}>
              <Text style={styles.text}>{user.displayName}</Text>
              <Text
                style={[
                  styles.descriptive,
                  {
                    color: gray,
                  },
                ]}
              >
                @{user.username}.outlook.com
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <SearchBar
            barStyle="black"
            tintColor={colors._core}
            searchBarStyle="minimal"
          />
        </View>

        <DrawerItemList {...props} />

        <View style={styles.row}>
          <Ionicons name="star-outline" color={"white"} size={22} />

          <SwiftText
            style={{ marginLeft: 20 }}
            fontSize={14.5}
            fontWeight="medium"
          >
            Rate us
          </SwiftText>
          <View style={styles.chevron}>
            <Ionicons name="chevron-forward" color={gray} size={18} />
          </View>
        </View>
      </DrawerContentScrollView>

      <View
        style={[
          styles.bottomContentContainer,
          {
            marginLeft: hasDynamicIsland() ? 40 : 20,
          },
        ]}
      >
        <View style={styles.bottomContainer}>
          <HStack spacing={20}>
            <AntDesign name="logout" color={"white"} size={22} />
            <SwiftText>Logout</SwiftText>
          </HStack>
        </View>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  bottomContentContainer: {
    marginBottom: 35,
  },
  bottomContainer: {
    width: 100,
    height: 40,

    borderRadius: 9999,
  },
  topContentContainer: {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 30,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 9999,
    borderWidth: 0.4,
    borderColor: "#575757",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  descriptive: {
    fontSize: 13.5,
  },
  vStack: {
    marginLeft: 10,
  },
  row: {
    marginLeft: 30,
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  chevron: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
  },
});
