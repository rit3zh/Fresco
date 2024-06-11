import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const HorizontalListStyle = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
  },
  image: {
    width: 90,
    height: 150,
    borderRadius: 9,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 5,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});
