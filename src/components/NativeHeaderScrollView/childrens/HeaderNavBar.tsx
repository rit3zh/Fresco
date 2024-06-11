import { RoundButton } from "./RoundButton";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onLeftPress?: () => any;
  onRightPress?: () => any;
  color?: string;
  rightIcon?: string;
  leftIcon?: string;
  size?: number;
}

export const HeaderNavBar: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <StatusBar
          translucent
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          backgroundColor="black"
        />
        <RoundButton
          color={props.color}
          icon={
            <Ionicons
              name={props.leftIcon as any}
              size={props.size}
              color={"black"}
            />
          }
          onPress={props.onLeftPress!}
        />
        {!props.rightIcon ? null : (
          <View style={styles.btnRightContainer}>
            <View style={styles.btnRight}>
              <RoundButton
                color={props?.color}
                icon={
                  <Ionicons
                    name={props.rightIcon as any}
                    color={"black"}
                    size={props.size}
                  />
                }
                onPress={props.onRightPress!}
              />
            </View>
          </View>
        )}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnRight: {
    marginRight: 8,
  },
});
