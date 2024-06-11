import { RoundButton } from "./RoundButton";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title?: string;
  onPress?: () => any;
  size?: number;
}

export const TopNavBar: React.FC<Props> = ({ ...props }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={[{ width: width / 3 }, styles.leftContainer]}>
        <RoundButton
          color="transparent"
          icon={
            <Ionicons name="chevron-back" color={"white"} size={props.size} />
          }
          onPress={() => props?.onPress!()}
        />
      </View>
      <View
        style={[
          styles.titleContainer,
          {
            width: width / 3,
          },
        ]}
      >
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={[{ width: width / 3 }, styles.btnRightContainer]}>
        <View style={styles.btnRight}>
          <RoundButton
            color="transparent"
            icon={
              <Ionicons
                name="chevron-forward"
                color={"black"}
                size={props.size}
              />
            }
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={{ width: width / 3 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
    borderBottomColor: "#a4a4a4",
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: "black",
  },
  leftContainer: {
    paddingLeft: 8,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 19,
  },
  btnRightContainer: {
    alignItems: "flex-end",
  },
  btnRight: {
    paddingRight: 8,
  },
});
