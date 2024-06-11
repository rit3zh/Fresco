import React, { ReactElement, useState } from "react";
import { IAnimatedScrollview } from "../types/IAnimatedScrollview";
import Animated, {
  useAnimatedRef,
  useSharedValue,
} from "react-native-reanimated";
import { ScrollViewChild } from "./ScrollViewChild/index";

export const AnimatedScrollview = ({
  children,
  config,
  style = {},
}: IAnimatedScrollview): ReactElement => {
  const [height, setHeight] = useState<number>();
  const aref = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useSharedValue(0);

  return (
    <Animated.ScrollView
      contentInsetAdjustmentBehavior={"always"}
      ref={aref}
      scrollEventThrottle={16}
      onScroll={(event) => {
        scrollOffset.value = event.nativeEvent.contentOffset.y;
      }}
      style={style}
      onLayout={({
        nativeEvent: {
          layout: { height },
        },
      }) => {
        setHeight(height);
      }}
    >
      {!children || !height
        ? null
        : (!Array.isArray(children) ? [children] : children).map((child) => {
            return (
              <ScrollViewChild
                key={child.key}
                child={child}
                scrollOffset={scrollOffset}
                parentHeight={height}
                allConfigs={config}
                topOffsetParent={0}
              />
            );
          })}
    </Animated.ScrollView>
  );
};
