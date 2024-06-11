import { View, SafeAreaView, FlatList, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { ExploreStackView, HorizontalList, TitleView } from "@/components";
import { ExploreStyle as styles } from "@/stylesheet/screens/explore/Explore";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import {
  EXPLORE_CATEGORIES,
  Featuring,
  colors,
  sortCategoriesAlphabetically,
} from "@/utils/constants";
import { uuid } from "@/utils/common/uuid";
import Animated, { FadeIn } from "react-native-reanimated";
export function Explore(props: NativeStackHeaderProps) {
  useLayoutEffect(() => {
    props?.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
        hideWhenScrolling: false,
        tintColor: colors._core,
      },
    });
  }, [props?.navigation]);

  return (
    <React.Fragment>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <SafeAreaView>
          <Animated.View
            entering={FadeIn.duration(500)}
            style={{ marginBottom: 10 }}
          >
            <View style={styles.titleView}>
              <TitleView title="Featuring" fontSize={25} chevron />
            </View>
            <FlatList
              data={Featuring}
              keyExtractor={() => uuid()}
              horizontal={true}
              renderItem={({ item, index }) => (
                <HorizontalList name={item.name} image={item.image} />
              )}
            />

            <View style={styles.titleView}>
              <TitleView title="Browse All" fontSize={25} />
            </View>

            <FlatList
              data={sortCategoriesAlphabetically(EXPLORE_CATEGORIES)}
              keyExtractor={() => uuid()}
              numColumns={2}
              contentContainerStyle={styles.flatlist}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <React.Fragment>
                  <ExploreStackView
                    onPress={(title, image) =>
                      props.navigation.navigate("Category", {
                        name: title,
                        image,
                      })
                    }
                    _index={index}
                    _length={EXPLORE_CATEGORIES.length}
                    title={item.name}
                    image={
                      item.images[
                        Math.floor(Math.random() * item.images.length)
                      ]
                    }
                  />
                </React.Fragment>
              )}
            />
          </Animated.View>
        </SafeAreaView>
      </ScrollView>
    </React.Fragment>
  );
}
