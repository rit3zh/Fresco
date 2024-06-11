import { View, Text } from "react-native";
import React from "react";
import type { Props } from "./props";
import { HorizontalListStyle as style } from "./styles";
import FastImage from "react-native-fast-image";

const HorizontalList: React.FC<Props> = ({
  ...props
}: Props): JSX.Element & React.ReactNode => {
  return (
    <View style={style.container}>
      <FastImage
        source={{
          uri: props.image,
        }}
        style={style.image}
      />

      <View style={style.textContainer}>
        <Text style={style.text}>{props.name}</Text>
      </View>
    </View>
  );
};

export default HorizontalList;
