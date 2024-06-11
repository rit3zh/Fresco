import { View, Text, FlatList } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { CategoryList, NativeHeaderScrollView } from "@/components/index";
import { AbstractWallpaper } from "@/utils/constants/index";
import { CategoryStyles as styles } from "@/stylesheet/screens/category/Category";
import { Feather, Ionicons } from "@expo/vector-icons";

export function Category(props: NativeStackHeaderProps) {
  const _ = props.route.params as any;
  const params = _;
  const resultsLength = AbstractWallpaper.length;

  return (
    <NativeHeaderScrollView
      onPress={() =>
        props.navigation.canGoBack() ? props.navigation.goBack() : null
      }
      title={params.name}
      image={params.image}
    >
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptiveRow}>
          <Ionicons name="logo-firebase" size={22} color="#6e6e6e" />
          <Text style={styles.description}>
            {resultsLength} listed wallpapers from Abstract collection.
          </Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.square}>
            <Feather name="filter" size={20} color="white" />
          </View>
        </View>
      </View>

      <FlatList
        data={AbstractWallpaper}
        keyExtractor={(key) => key.id}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        renderItem={({ item, index }) => (
          <CategoryList
            _index={index}
            _length={resultsLength}
            image={item.image}
            title={item.title}
            tags={item.tags.map((tag) => tag.name)}
          />
        )}
      />
    </NativeHeaderScrollView>
  );
}
