// FadeInRightView.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { FadeInRightViewProps } from "./types";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
const FadeInRightView: React.FC<FadeInRightViewProps> = ({ children }) => {
  return (
    <Animated.View entering={FadeInRight.duration(1000).springify()}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadeInView: {},
});

export default FadeInRightView;
