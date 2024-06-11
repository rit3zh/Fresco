import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import type { Props } from "./props";
import { CollageStyles as styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import FastImage from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { MotiView } from "moti";
import { hasDynamicIsland } from "react-native-device-info";

const Collage: React.FC<Props> = ({ images }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HStackContainerTopBar}>
        <MotiView
          from={{
            bottom: 150,
            right: 100,
          }}
          transition={{
            type: "timing",
            duration: 400,
            delay: 300,
          }}
          animate={{
            bottom: 0,
            left: 0,
          }}
          exit={{ opacity: 0 }}
        >
          <FastImage
            source={{ uri: images[0].image }}
            style={styles.sideImage}
          />
        </MotiView>
        <MotiView
          from={{
            bottom: 200,
          }}
          animate={{
            bottom: 0,
          }}
        >
          <FastImage
            source={{ uri: images[1].image }}
            style={styles.middleImage}
          />
        </MotiView>

        <MotiView
          from={{
            bottom: 150,
            left: 90,
          }}
          transition={{
            type: "timing",
            duration: 400,
            delay: 300,
          }}
          animate={{
            bottom: 0,
            left: 0,
          }}
          exit={{ opacity: 0 }}
        >
          <FastImage
            source={{ uri: images[2].image }}
            style={styles.sideImage}
          />
        </MotiView>
      </View>
      <View style={styles.HStackContainerBottomBar}>
        <MotiView
          from={{
            top: 150,
            right: 90,
          }}
          transition={{
            type: "timing",
            duration: 400,
            delay: 300,
          }}
          animate={{
            top: 0,
            right: 0,
          }}
          exit={{ opacity: 0 }}
        >
          <View style={styles.bottomImageContainer}>
            <FastImage
              source={{ uri: images[3].image }}
              style={styles.sideImage}
            />
          </View>
        </MotiView>
        <MotiView
          from={{
            top: 200,
          }}
          animate={{
            top: 0,
          }}
        >
          <FastImage
            source={{ uri: images[4].image }}
            style={styles.middleImage}
          />
        </MotiView>
        <MotiView
          from={{
            top: 150,
            left: 90,
          }}
          transition={{
            type: "timing",
            duration: 400,
            delay: 300,
          }}
          animate={{
            top: 0,
            left: 0,
          }}
          exit={{ opacity: 0 }}
        >
          <View style={styles.bottomImageContainer}>
            <FastImage
              source={{ uri: images[5].image }}
              style={styles.sideImage}
            />
          </View>
        </MotiView>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1.0)"]}
          style={{
            position: "absolute",
            width: "150%",
            height: hasDynamicIsland()
              ? heightPercentageToDP(45)
              : heightPercentageToDP(50),
          }}
        />
        <View
          style={[
            styles.logoContainer,
            {
              height: hasDynamicIsland()
                ? heightPercentageToDP(50)
                : heightPercentageToDP(35),
              marginLeft: hasDynamicIsland() ? 0 : 25,
            },
          ]}
        >
          <FastImage
            source={require("../../../../assets/FRESCO.png")}
            style={styles.logo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Collage;
