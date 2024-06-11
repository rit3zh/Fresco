import { View, Text } from "react-native";
import React from "react";
import OnBoardingComponent from "@/screens/on-boarding/Cuberto";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export function OnBoarding(props: NativeStackHeaderProps) {
  return (
    <OnBoardingComponent
      onEnd={() => props.navigation.navigate("EntryScreen")}
    />
  );
}
