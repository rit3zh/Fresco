import { Dimensions, StyleSheet } from "react-native";
import { hasDynamicIsland } from "react-native-device-info";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const LoginStyles = StyleSheet.create({
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  socialButtons: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  masked: {
    backgroundColor: "#5b5b5b",
    borderRadius: 8,
    height: 50,
    width: 50,
  },
  gradientButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textInputContainer: {
    marginTop: 30,
  },
  textInput: {
    flex: 1,
  },
  leftIconContainer: {
    marginRight: 15,
  },
  footerText: {
    color: "gray",
  },
  forgotPasswordText: {
    color: "white",
    fontWeight: "700",
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
    marginTop: 20,
  },
  forgotPasswordContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
  },
  checkBox: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    top: 2,
  },
  searchContainerStyle: {
    backgroundColor: "#2c2c2c",
    borderRadius: 8.0,
    height: 45.0,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5.0,
    width: widthPercentageToDP(90),
    marginBottom: 10,
    alignSelf: "center",
    borderWidth: 0.8,
    borderColor: "#797979",
  },
  upperTextInputTextContainer: {
    marginLeft: 25,
    justifyContent: "center",
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
  upperTextInputText: {
    color: "#aaa9a9",
    fontSize: 16,
    fontWeight: "500",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    backgroundColor: "#747474",
    left: 35.89,
    borderTopLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderTopRightRadius: 2,
    transform: [{ rotate: "45deg" }],
  },
  line: {
    width: widthPercentageToDP(60),
    height: 0.5,
    backgroundColor: "#747474",
  },
  titleText: {
    color: "white",
    fontWeight: "600",
    fontSize: 28,
  },
  descriptionContainer: {
    marginTop: 10,
  },
  description: {
    color: "gray",
    fontSize: 17.5,
  },
  topContent: {
    justifyContent: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  footerContentText: {
    color: "#a3a3a3",
    fontSize: 15,
  },
  footerContentContainer: {
    height: hasDynamicIsland()
      ? heightPercentageToDP(20)
      : heightPercentageToDP(8),
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  backContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  backText: {
    color: "white",
    fontWeight: "600",
    paddingLeft: 15,
    fontSize: 16,
  },
});
