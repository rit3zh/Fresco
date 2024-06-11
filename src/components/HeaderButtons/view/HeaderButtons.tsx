import { View, Text } from "react-native";
import React from "react";
import { HeaderLeftStyles, HeaderRightStyles } from "./styles";
import { Feather } from "@expo/vector-icons";

const RightButton = () => (
  <React.Fragment>
    <View style={HeaderRightStyles.container}>
      <Feather name="upload-cloud" color={"#fff"} size={20} />
    </View>
  </React.Fragment>
);

const LeftButton = () => <React.Fragment></React.Fragment>;

export default { RightButton, LeftButton };
