import { Dimensions, StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const GradientButtonStyles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 19,
    fontWeight: "600",
  },
});
