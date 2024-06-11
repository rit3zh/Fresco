import { Dimensions, StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const SocialButtonStyles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 50,
    borderWidth: 1,
    borderColor: "#5d5d5d",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
  text: {
    color: "#dcdcdc",
    fontSize: 18,
    fontWeight: "500",
  },
});
