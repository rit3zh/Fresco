import { View, Text } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import { PROFILE, colors } from "@/utils/constants/index";
import {
  HStack,
  List,
  Section,
  Spacer,
  Text as SwiftText,
  Toggle,
  Button,
} from "swiftui-react-native";
import { ProfileCardStyle as styles } from "./styles";
import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ListIcon from "../childrens/ListIcon";
import switchTheme from "react-native-theme-switch-animation";

const ProfileCard = () => {
  const [theme, setTheme] = React.useState("light");

  const user = PROFILE;
  return (
    <>
      <List style={{ flex: 1 }} hidden={false}>
        <Section header="Profile">
          <HStack padding={{ vertical: 0 }}>
            <View style={styles.details}>
              <FastImage source={{ uri: user.avatar }} style={styles.image} />
              <View style={styles.descriptiveView}>
                <Text style={styles.displayName}>{user.displayName}</Text>
                <View style={styles.descriptiveContainer}>
                  <Text style={styles.descriptive}>
                    {user.username}@outlook.com
                  </Text>
                  <View style={styles.iconContainer}>
                    <FontAwesome6
                      name="heart-circle-check"
                      size={18}
                      color={colors._core}
                    />
                  </View>
                </View>
              </View>
            </View>

            <Spacer />
            <Ionicons
              name="chevron-forward"
              size={22}
              style={{ right: 10 }}
              color={"#8E8E93FF"}
            />
          </HStack>
        </Section>

        <Section header="preferences">
          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#ff8800"
              iconComponent={() => (
                <Ionicons name="language" size={18} color="white" />
              )}
            />
            <SwiftText>{"Language"}</SwiftText>

            <Spacer />
            <SwiftText fontSize={17} foregroundStyle={"#8E8E93FF"}>
              English
            </SwiftText>
            <Ionicons name="chevron-forward" size={18} color={"#8E8E93FF"} />
          </HStack>

          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#0f7bef"
              iconComponent={() => (
                <MaterialCommunityIcons
                  name="file-tree"
                  size={18}
                  color="white"
                />
              )}
            />
            <SwiftText>{"File Locations"}</SwiftText>
            <Spacer />
            <Ionicons name="chevron-forward" size={18} color={"#8E8E93FF"} />
          </HStack>

          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#ea0000"
              iconComponent={() => (
                <Ionicons name="bookmark" size={18} color="white" />
              )}
            />
            <SwiftText>{"Saved"}</SwiftText>
            <Spacer />
            <Ionicons name="chevron-forward" size={18} color={"#8E8E93FF"} />
          </HStack>
        </Section>

        <Section header="appearance">
          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#333333"
              iconComponent={() => (
                <Ionicons name="moon-sharp" size={18} color="white" />
              )}
            />
            <SwiftText>{"Dark Mode"}</SwiftText>
            <Spacer />
            <Toggle
              isOn
              onChange={() => {
                switchTheme({
                  switchThemeFunction: () => {
                    setTheme(theme === "light" ? "dark" : "light");
                  },
                  animationConfig: {
                    type: "circular",
                    duration: 900,
                    startingPoint: {
                      cxRatio: 0.5,
                      cyRatio: 0.5,
                    },
                  },
                });
              }}
            />
          </HStack>

          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#d60d75"
              iconComponent={() => (
                <Entypo name="folder-images" size={18} color="white" />
              )}
            />
            <SwiftText>{"App Icon"}</SwiftText>
            <Spacer />
            <Ionicons name="chevron-forward" size={18} color={"#8E8E93FF"} />
          </HStack>

          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#6117f5ff"
              iconComponent={() => (
                <Ionicons name="color-fill-sharp" size={18} color="white" />
              )}
            />
            <SwiftText>{"Color Palette"}</SwiftText>
            <Spacer />
            <Ionicons name="chevron-forward" size={18} color={"#8E8E93FF"} />
          </HStack>
        </Section>

        <Section header="resources">
          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#2d2d2d"
              iconComponent={() => (
                <MaterialIcons name="security" size={18} color="white" />
              )}
            />
            <SwiftText>{"Privacy"}</SwiftText>
            <Spacer />
          </HStack>

          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#2d2d2d"
              iconComponent={() => (
                <Ionicons name="star-outline" size={18} color="white" />
              )}
            />
            <SwiftText>{"Rate us"}</SwiftText>
            <Spacer />
          </HStack>

          <HStack spacing={15} padding={{ vertical: 0 }}>
            <ListIcon
              color="#2d2d2d"
              iconComponent={() => (
                <Ionicons name="warning" size={18} color="white" />
              )}
            />
            <SwiftText>{"About"}</SwiftText>
            <Spacer />
          </HStack>
        </Section>

        <Button title="Logout" action={() => {}} foregroundStyle={"red"} />
      </List>
    </>
  );
};

export default ProfileCard;
