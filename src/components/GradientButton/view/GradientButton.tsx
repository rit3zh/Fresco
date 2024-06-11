import { View, Text } from "react-native";
import React from "react";
import { Props } from "./props";
import { LinearGradient } from "expo-linear-gradient";
import { GradientButtonStyles as styles } from "./style";
import Bounceable from "@freakycoder/react-native-bounceable";

const GradientButton: React.FC<Props> = ({
  text,
}: Props): JSX.Element & React.ReactNode => {
  return (
    <Bounceable>
      <LinearGradient
        colors={["#c64c49", "#c64c49", "#a34567", "#9b63badb"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </Bounceable>
  );
};

export default GradientButton;
