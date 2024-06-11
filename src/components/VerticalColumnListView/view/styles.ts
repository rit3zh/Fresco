import { Dimensions, StyleSheet } from "react-native";
import { hasDynamicIsland } from "react-native-device-info";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const VerticalColumnListView = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageView: {
    marginLeft: 20,
  },
  image: {
    width: wp("55%"),
    height: hasDynamicIsland() ? hp("40%") : hp("55%"),
    borderRadius: 8,
  },
});
