import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  icon: JSX.Element;
  onPress: () => void;
  color?: string;
};
export const RoundButton = ({ icon, onPress, color }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: color ? color : "#ffffff",
        },
      ]}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
