import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width } = Dimensions.get("window");

export const ExploreStacKStyle = StyleSheet.create({
  container: {
    margin: 5,
  },
  contentContainer: {
    width: wp(47),
    height: 120,

    borderRadius: 5,

    overflow: "hidden",
  },
  titleWrapperContainer: {
    position: "absolute",
    width: wp(47),
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0.2,
      height: 0.89,
    },
    shadowOpacity: 0.89,
  },
  wrapper: {
    width: 190,
    height: 110,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imageContainer: {},
  image: {
    width: wp(47),
    height: 120,
    opacity: 0.5,
  },
});
