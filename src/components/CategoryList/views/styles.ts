import { Dimensions, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const CategoryListStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: widthPercentageToDP(50),
    height: 390,
    borderRadius: 10,
  },
  iconContainer: {
    position: "absolute",
  },
  iconContentContainer: {
    width: 200,
    height: 390,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    bottom: 40,
    left: 0,
  },
  ellipsisContainer: {
    width: 200,
    height: 390,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    right: 0,
    top: 20,
  },
  iconBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 9999,
    width: 30,
    height: 30,
  },
});
