import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { EntryStyles as styles } from "@/stylesheet/screens/onboarding/Entry";
import { Collage } from "@/components";
import { WallpaperCollage } from "@/utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import Circle from "@/components/Shapes/views/Circle";
import { Ionicons } from "@expo/vector-icons";
import FastImage from "react-native-fast-image";
import { hasDynamicIsland } from "react-native-device-info";

export function Entry() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["transparent", "black", "black"]}
    >
      <SafeAreaView>
        <Collage images={WallpaperCollage} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            bottom: hasDynamicIsland() ? 30 : 140,
          }}
        >
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.loginText}>Login with</Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.iconsContainer}>
            <Circle
              color="white"
              height={60}
              width={60}
              iconComponent={() => (
                <>
                  <FastImage
                    source={{
                      uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </>
              )}
            />
            <Circle
              color="white"
              height={60}
              width={60}
              iconComponent={() => (
                <FastImage
                  source={{
                    uri: "https://freebiehive.com/wp-content/uploads/2024/02/Facebook-Logo-PNG.jpg",
                  }}
                  style={{ width: 35, height: 35 }}
                />
              )}
            />

            <Circle
              color="white"
              height={60}
              width={60}
              iconComponent={() => (
                <Ionicons name="logo-apple" color={"black"} size={25} />
              )}
            />
          </View>
        </View>

        <View
          style={[
            styles.skipContainer,
            {
              bottom: hasDynamicIsland() ? 0 : 125,
            },
          ]}
        >
          <Text style={styles.skipText}>Skip</Text>
          <Ionicons name="chevron-forward" color={"gray"} size={16} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
