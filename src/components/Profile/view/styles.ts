import { Dimensions, StyleSheet } from "react-native";

export const ProfileCardStyle = StyleSheet.create({
  details: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  bottomView: {
    marginLeft: 10,
  },
  descriptiveView: {
    flexDirection: "column",
    marginLeft: 10,

    justifyContent: "center",
  },
  displayName: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 2,
  },
  descriptive: {
    color: "gray",
    fontSize: 13,
  },
  profileText: {
    color: "white",
    fontSize: 17,
  },
  descriptiveContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginLeft: 10,
  },
});
