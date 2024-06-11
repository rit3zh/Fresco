import { Dimensions, StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const CategoryStyles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    color: "#717171",
    fontSize: 13.4,
    marginLeft: 5,
  },
  descriptiveRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  square: {
    width: 40,
    height: 40,
    backgroundColor: "#3b3b3b",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    marginRight: 10,
  },
});
