import React from "react";
import SkeletonView from "react-native-reanimated-skeleton";
import { TopSkeletonLayout, MiddleSkeletonLayout } from "./SkeletonLayout";
import { Skeleton as SkeletonType } from "@/enums/SkeletonEnum";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";

const Skeleton: React.FC = (): React.JSX.Element &
  React.ReactNode &
  React.ReactElement => {
  return (
    <React.Fragment>
      <Animated.View entering={FadeInUp}>
        <SkeletonView
          animationDirection="horizontalRight"
          boneColor={SkeletonType.BoneColor}
          containerStyle={{
            alignItems: "flex-start",
            marginLeft: 20,
          }}
          isLoading={true}
          highlightColor={SkeletonType.HightlightColor}
          layout={TopSkeletonLayout}
        >
          <React.Fragment />
        </SkeletonView>

        <SkeletonView
          animationDirection="diagonalDownLeft"
          boneColor={SkeletonType.BoneColor}
          containerStyle={{
            alignItems: "flex-start",
            marginLeft: 20,
          }}
          isLoading={true}
          highlightColor={SkeletonType.HightlightColor}
          layout={MiddleSkeletonLayout}
        >
          <React.Fragment />
        </SkeletonView>

        <SkeletonView
          animationDirection="horizontalRight"
          boneColor={SkeletonType.BoneColor}
          containerStyle={{
            alignItems: "flex-start",
            marginLeft: 20,
            marginTop: 20,
          }}
          isLoading={true}
          highlightColor={SkeletonType.HightlightColor}
          layout={TopSkeletonLayout}
        >
          <React.Fragment />
        </SkeletonView>

        <SkeletonView
          animationDirection="diagonalTopRight"
          boneColor={SkeletonType.BoneColor}
          containerStyle={{
            alignItems: "flex-start",
            marginLeft: 20,
          }}
          isLoading={true}
          highlightColor={SkeletonType.HightlightColor}
          layout={MiddleSkeletonLayout}
        >
          <React.Fragment />
        </SkeletonView>
      </Animated.View>
    </React.Fragment>
  );
};

export default Skeleton;
