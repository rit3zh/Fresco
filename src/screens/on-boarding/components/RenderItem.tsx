import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { OnboardingData } from "../data";
import LottieView from "lottie-react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { hasDynamicIsland } from "react-native-device-info";

type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
};

const RenderItem = ({ index, x, item }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      Math.abs(x.value),
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );
    const translateY = interpolate(
      Math.abs(x.value),
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }, { translateY }],
    };
  });

  return (
    <Animated.View
      style={[styles.itemContainer, { width: SCREEN_WIDTH }, animatedStyle]}
    >
      <View
        style={[
          styles.animationContainer,
          {
            backgroundColor: item.animationBg,
          },
        ]}
      >
        <LottieView
          source={item.animation}
          style={[
            styles.animation,
            {
              height: hasDynamicIsland()
                ? heightPercentageToDP(30)
                : heightPercentageToDP(30),
            },
          ]}
          autoPlay
          loop
          renderMode="HARDWARE"
        />
      </View>
      <Animated.Text style={[styles.itemText, { color: item.textColor }]}>
        {item.text}
      </Animated.Text>
      <Animated.Text style={[styles.descriptionText]}>
        {item.description}
      </Animated.Text>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: hasDynamicIsland() ? 150 : 50,
  },
  itemText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: hasDynamicIsland() ? 20 : 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  animationContainer: {
    borderRadius: 40,
    overflow: "hidden",
  },
  animation: {
    width: 200,
    height: 200,
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    marginTop: hasDynamicIsland() ? 20 : 0,
    marginHorizontal: 10,
    color: "#6e6e6e",
  },
});
