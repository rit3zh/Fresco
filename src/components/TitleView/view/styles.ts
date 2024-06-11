import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const { width } = Dimensions.get("window");

export const TitleViewStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width,
    justifyContent: "space-between",
    marginBottom: 10,
    top: 15,
  },
  title: {
    fontWeight: "600",
    fontSize: 11,
    color: "white",
  },
  titleView: {
    marginLeft: 20,
  },
  chevronView: {
    marginRight: 10,
  },
});
