import { View, Text } from "react-native";
import React from "react";
import { CategoryListStyle as styles } from "./styles";
import type { Props } from "./types";
import FastImage from "react-native-fast-image";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { HStack, VStack } from "swiftui-react-native";
import { hasDynamicIsland } from "react-native-device-info";

const CategoryList: React.FC<Props> = ({
  ...props
}: Props): React.ReactNode => {
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: props._length - 1 === props._index ? 100 : 0,
        },
      ]}
    >
      <FastImage source={{ uri: props.image }} style={styles.image} />

      <View style={styles.iconContainer}>
        <View style={styles.iconContentContainer}>
          <VStack
            style={{ marginLeft: hasDynamicIsland() ? 20 : 20 }}
            spacing={20}
          >
            <Feather name="download" size={30} color={"white"} />
            <Feather name="heart" size={30} color={"white"} />
          </VStack>
        </View>
      </View>
    </View>
  );
};

export default CategoryList;
