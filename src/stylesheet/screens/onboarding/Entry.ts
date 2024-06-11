import { Dimensions, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const EntryStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: widthPercentageToDP(55),

    flexDirection: "row",
  },
  skipText: {
    color: "gray",
    fontSize: 16,
  },
  dividerContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    marginLeft: 10,
    color: "#898989",
    marginRight: 10,
  },
  divider: {
    width: 150,
    height: 0.9,
    backgroundColor: "#333333",
  },
  skipContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginLeft: 10,
  },
});
