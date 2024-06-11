import { View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import {
  TitleView,
  VerticalColumnListView,
  CategorySelector,
} from "@/components";

import { DiscoveryStyle as styles } from "@/stylesheet/screens/discovery/Discovery";
import {
  HomeData,
  HomeData2,
  HomeData3,
  HomeData4,
} from "@/utils/constants/data/HomeData";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { BestPickImages, WALLPAPER_CATEGORIES } from "@/utils/constants";
import Skeleton from "@/components/SkeletonLoading/view/Skeleton";
import { useLoadingState, useResponsiveSize } from "@/utils/hooks/index";
import { AnimatedScrollview } from "@/packages/index";
import PhotoGrid from "react-native-thumbnail-grid";

export function Discovery(props: NativeStackHeaderProps) {
  const [wp, hp] = useResponsiveSize();
  const [loadingComplete] = useLoadingState();

  return loadingComplete ? (
    <AnimatedScrollview
      config={{
        secondChild: {
          animation: {
            order: ["translateX"],
            translateX: { start: 0, end: 0, unit: "%" },
          },
          relativeOffsetFromBottom: 20,
        },
        thirdChild: {
          animation: {
            order: ["translateX"],
            translateX: { start: -100, end: 0, unit: "%" },
          },
          relativeOffsetFromBottom: 20,
        },

        fourthChild: {
          animation: {
            order: ["translateX"],
            translateX: { start: -100, end: 0, unit: "%" },
          },
          relativeOffsetFromBottom: 0,
        },
      }}
    >
      <SafeAreaView>
        <View style={styles.selectorContainer}>
          <CategorySelector data={WALLPAPER_CATEGORIES} />
          <TitleView title={"Best Picks"} chevron fontSize={20} />
          <View style={styles.gridContainer}>
            <PhotoGrid
              width={wp(90)}
              height={hp(35)}
              source={BestPickImages}
              onPressImage={(uri: string) => {}}
              imageStyle={[styles.gridImage]}
            />
          </View>
        </View>
        <View style={[styles.container]}>
          <TitleView title={"Hot of the week"} chevron fontSize={20} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={HomeData}
            keyExtractor={(key) => key.id}
            horizontal={true}
            renderItem={({ item, index }) => (
              <VerticalColumnListView
                index={index}
                onPress={() =>
                  props.navigation.navigate("Details", { data: item })
                }
                id={item.id}
                image={item.image}
                tags={item.tags}
                title={item.title}
              />
            )}
          />
        </View>

        <View style={styles.container} key={"secondChild"}>
          <TitleView title="Trending now" chevron fontSize={20} />
          <FlatList
            data={HomeData2}
            keyExtractor={(key) => key.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item, index }) => (
              <VerticalColumnListView
                index={index}
                image={item.image}
                tags={item.tags}
                title={item.title}
                id={item.id}
                onPress={() =>
                  props.navigation.navigate("Details", { data: item })
                }
              />
            )}
          />
        </View>

        <View style={styles.container} key={"thirdChild"}>
          <TitleView title="Cool" chevron fontSize={20} />
          <FlatList
            data={HomeData3}
            keyExtractor={(key) => key.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item, index }) => (
              <VerticalColumnListView
                index={index}
                image={item.image}
                tags={item.tags}
                title={item.title}
                id={item.id}
                onPress={() =>
                  props.navigation.navigate("Details", { data: item })
                }
              />
            )}
          />
        </View>

        <View style={styles.container} key={"fourthChild"}>
          <TitleView title="HD" chevron fontSize={20} />
          <FlatList
            data={HomeData4}
            keyExtractor={(key) => key.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item, index }) => (
              <VerticalColumnListView
                index={index}
                image={item.image}
                tags={item.tags}
                title={item.title}
                length={HomeData4.length}
                id={item.id}
                onPress={() =>
                  props.navigation.navigate("Details", { data: item })
                }
              />
            )}
          />
        </View>
      </SafeAreaView>
    </AnimatedScrollview>
  ) : (
    <Skeleton />
  );
}
