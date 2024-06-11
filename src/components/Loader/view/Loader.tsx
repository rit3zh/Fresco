import { View, Text } from "react-native";
import React from "react";
import LoaderKit, { animations } from "react-native-loader-kit";
const Loader = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <LoaderKit
        style={{ width: 90, height: 90 }}
        name={animations[16]}
        color={"white"}
      />
    </View>
  );
};

export default Loader;
