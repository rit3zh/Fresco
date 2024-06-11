import { Dimensions, StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const CollageStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    bottom: heightPercentageToDP(4),
  },
  HStackContainerTopBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  HStackContainerBottomBar: {
    flexDirection: "row",
  },
  middleImage: {
    width: 150,
    height: 300,

    borderRadius: 14,
    bottom: 20,
    marginBottom: 3.4,
  },
  sideImage: {
    width: 120,
    height: 240,
    borderRadius: 9,
    marginLeft: 10,
    marginRight: 10,
  },
  bottomImageContainer: {
    bottom: 20,
  },
  logoContainer: {
    position: "absolute",

    justifyContent: "center",
    alignItems: "center",
    width,
  },
  logo: { width: 200, height: 200 },
});
