import { ICustomViewStyle } from "react-native-reanimated-skeleton";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
export const TopSkeletonLayout: ICustomViewStyle[] = [
  {
    width: wp("55%"),
    height: 30,
    alignItems: "flex-end",
    marginTop: 20,
    borderRadius: 90,
    flexDirection: "row",

    children: [
      {
        width: wp("55%"),
        height: 30,
        alignItems: "flex-end",
        marginTop: 20,
        borderRadius: 90,
        marginRight: 50,
      },
      {
        width: wp("15%"),
        height: 30,
        alignItems: "flex-end",
        marginTop: 20,
        borderRadius: 10,
        left: 40,
      },
    ],
  },
];

export const MiddleSkeletonLayout: ICustomViewStyle[] = [
  {
    width: wp("55%"),
    height: hp("40%"),
    borderRadius: 8,
    marginTop: 35,
    flexDirection: "row",

    children: [
      {
        width: wp("55%"),
        height: hp("40%"),
        borderRadius: 8,

        marginRight: 20,
      },
      {
        width: wp("55%"),
        height: hp("40%"),
        borderRadius: 8,
      },
    ],
  },
];
