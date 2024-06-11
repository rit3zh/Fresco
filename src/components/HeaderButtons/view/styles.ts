import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "@/utils/constants/index";
const { height, width } = Dimensions.get("window");

export const HeaderRightStyles = StyleSheet.create({
  container: {
    width: wp("10%"),
    height: hp("4%"),
    backgroundColor: colors._core,
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  text: {
    color: "white",

    fontSize: 14,
    marginLeft: 10,
  },
});

export const HeaderLeftStyles = StyleSheet.create({
  container: {},
});
