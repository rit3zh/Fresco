import { View } from "react-native";
import React from "react";
import type { IProps } from "./props";
import { VerticalColumnListView as styles } from "./styles";
import FastImage from "react-native-fast-image";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import Bounceable from "@freakycoder/react-native-bounceable";

const VerticalColumnListView: React.FC<IProps> = ({
  ...props
}: IProps): React.JSX.Element => {
  let endAncestor;
  let endNode;
  return (
    <Animated.View
      style={[
        styles.container,
        {
          marginBottom: props?.length! - 1 === props?.index ? 50 : 0,
        },
      ]}
      entering={FadeInLeft.duration(800).delay(props.index * 8)}
    >
      <Bounceable onPress={() => props.onPress!(props)}>
        <View style={styles.imageView}>
          <SharedElement id={props.id as string}>
            <FastImage source={{ uri: props.image }} style={styles.image} />
          </SharedElement>
        </View>
      </Bounceable>
    </Animated.View>
  );
};

export default VerticalColumnListView;
