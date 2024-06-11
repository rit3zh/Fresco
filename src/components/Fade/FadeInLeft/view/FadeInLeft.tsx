// FadeInRightView.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { FadeInLeftViewProps } from "./types";
import Animated, { FadeInLeft } from "react-native-reanimated";
const FadeInleftView: React.FC<FadeInLeftViewProps> = ({ children }) => {
  return (
    <Animated.View entering={FadeInLeft.duration(1000).springify()}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadeInView: {},
});

export default FadeInleftView;
