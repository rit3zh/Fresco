/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import data from "./data";
import RenderItem from "./components/RenderItem";
import Animated, {
  clamp,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Button from "./components/Button";
import Background from "./components/Background";
import Circle from "./components/Circle";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

interface Props {
  onEnd: () => any;
}

const OnboardingScreenCuberto: React.FC<Props> = (props: Props) => {
  const x = useSharedValue(0);
  const context = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    };
  });

  useAnimatedReaction(
    () => {
      return Math.floor(Math.abs(x.value / SCREEN_WIDTH));
    },
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        runOnJS(setCurrentIndex)(currentValue);
      }
    }
  );

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      context.value = Math.abs(x.value);
    })
    .onUpdate((e) => {
      const clampValue = clamp(
        context.value - e.translationX,
        0,
        2 * SCREEN_WIDTH
      );

      x.value = -clampValue;
    })
    .onEnd((e) => {
      const isSwipeLeft = e.translationX < 0;
      const isSwipeRight = e.translationX > 0;
      const isBeyondLeftLimit =
        context.value < 2 * SCREEN_WIDTH && currentIndex <= 1;
      const isBeyondRightLimit = context.value > 0;

      let targetIndex;

      if (isSwipeLeft && isBeyondLeftLimit) {
        targetIndex =
          e.translationX < -SCREEN_WIDTH / 2 || e.velocityX < -500
            ? currentIndex + 1
            : currentIndex;
      } else if (isSwipeRight && isBeyondRightLimit) {
        targetIndex =
          e.translationX > SCREEN_WIDTH / 2 || e.velocityX > 500
            ? currentIndex
            : currentIndex + 1;
      }

      if (targetIndex !== undefined) {
        x.value = withTiming(-SCREEN_WIDTH * targetIndex, {
          duration: 550,
        });
      }
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Circle data={data} screenWidth={SCREEN_WIDTH} x={x} />
        <Background data={data} screenWidth={SCREEN_WIDTH} x={x} />

        <Animated.View
          style={[
            styles.listContainer,
            {
              width: data.length * SCREEN_WIDTH,
            },
            translateXStyle,
          ]}
        >
          {data.map((item, index) => {
            return <RenderItem item={item} index={index} x={x} key={index} />;
          })}
        </Animated.View>

        <Button
          onEndPress={props.onEnd}
          data={data}
          x={x}
          screenWidth={SCREEN_WIDTH}
          currentIndex={currentIndex}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default OnboardingScreenCuberto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexDirection: "row",
    flex: 1,
  },
});
