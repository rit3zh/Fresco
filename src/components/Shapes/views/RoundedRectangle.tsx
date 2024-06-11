import { View, Text, StyleSheet } from "react-native";
import React from "react";
import type { Props } from "./types";
import { colors } from "@/utils/constants";

const RoundedRectangle: React.FC<Props> = ({
  ...props
}: Props): JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        {
          width: props.width ? props.width : 80,
          height: props.height ? props.height : 20,
          backgroundColor: props.color ? props.color : colors._core,
        },
      ]}
    >
      {!props?.iconComponent! ? (
        <Text style={props.fontStyle}>{props.text}</Text>
      ) : (
        props.iconComponent!()
      )}
    </View>
  );
};

export default RoundedRectangle;

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
});
