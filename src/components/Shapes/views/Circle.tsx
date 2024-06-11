import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Props } from "./types";
import { colors } from "@/utils/constants";

const Circle: React.FC<Props> = ({
  iconComponent,
  ...props
}: Props): React.ReactNode => {
  return (
    <View
      style={[
        styles.container,
        {
          width: props.width ? props.width : 40,
          height: props.height ? props.height : 40,
          backgroundColor: props.color ? props.color : colors._core,
        },
      ]}
    >
      {iconComponent!()}
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
});
