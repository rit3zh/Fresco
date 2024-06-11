import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import FastImage from "react-native-fast-image";
import { SharedElement } from "react-navigation-shared-element";
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import { HStack } from "swiftui-react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Circule, RoundedRectangle } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/utils/constants";
import { Header, HeaderBackButton } from "@react-navigation/elements";

export function Details(props: NativeStackHeaderProps) {
  const params = props.route.params as any;

  const data = params?.data;

  const { width, height } = Dimensions.get("window");

  const onPress = () =>
    props.navigation.canGoBack() ? props.navigation.goBack() : undefined;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SharedElement id={data.id as string}>
        <FastImage
          resizeMode="cover"
          source={{
            uri: data.image,
          }}
          style={[
            styles.image,
            {
              width: width,
              height: height,
            },
          ]}
        />
        <Animated.View
          entering={FadeIn.delay(400).springify()}
          style={{
            height,
            width,
            position: "absolute",
            justifyContent: "flex-end",
          }}
        >
          <View style={{ marginBottom: heightPercentageToDP(5) }}>
            <HStack spacing={30}>
              <Animated.View entering={FadeInLeft.springify().delay(400)}>
                <Circule
                  width={50}
                  height={50}
                  iconComponent={() => (
                    <Ionicons
                      name="download-outline"
                      size={20}
                      color={"white"}
                    />
                  )}
                />
              </Animated.View>
              <Animated.View entering={FadeIn.springify().delay(800)}>
                <RoundedRectangle
                  width={150}
                  height={45}
                  text="Set as"
                  color="#f62a6a"
                  fontStyle={{
                    fontSize: 16,
                    color: "white",
                    fontWeight: "500",
                  }}
                />
              </Animated.View>
              <Animated.View entering={FadeInRight.springify().delay(400)}>
                <Circule
                  width={50}
                  color="white"
                  height={50}
                  iconComponent={() => (
                    <Ionicons
                      name="bookmark-outline"
                      size={20}
                      color={colors._core}
                    />
                  )}
                />
              </Animated.View>
            </HStack>
          </View>
        </Animated.View>
        <View
          style={{
            position: "absolute",
            width,
          }}
        >
          <Animated.View entering={FadeIn.springify().delay(900)}>
            <Header
              title="Detail"
              headerStyle={{
                backgroundColor: "transparent",
              }}
              headerLeft={() => (
                <HeaderBackButton tintColor="white" onPress={onPress} />
              )}
            />
          </Animated.View>
        </View>
      </SharedElement>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 4,
  },
});
