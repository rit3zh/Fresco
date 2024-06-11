import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
interface Props {
  image: string;
  title?: string;
}
export const Header: React.FC<Props> = ({
  ...props
}: Props): React.JSX.Element => (
  <React.Fragment>
    <Image
      source={{ uri: props.image }}
      style={{ ...StyleSheet.absoluteFillObject }}
    />

    <SafeAreaView style={styles.titleView}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </SafeAreaView>
  </React.Fragment>
);

const styles = StyleSheet.create({
  titleView: {
    height: 300,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  titleContainer: {
    position: "absolute",
    left: 50,
    bottom: 2,
  },
  title: {
    color: "#fff",
    fontSize: 75,
    fontWeight: "600",
  },
});
