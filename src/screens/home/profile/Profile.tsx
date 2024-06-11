import { ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  List,
  SecureField,
  Text,
  TextEditor,
  TextField,
  useBinding,
} from "swiftui-react-native";
import { ProfileCard } from "@/components";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { hasDynamicIsland } from "react-native-device-info";

export function Profile(props: NativeStackHeaderProps) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
      },
    });
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      contentContainerStyle={{
        flexGrow: 1,
        marginBottom: hasDynamicIsland() ? 0 : 110,
      }}
    >
      <ProfileCard />
    </ScrollView>
  );
}
