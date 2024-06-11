import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  iconComponent?: () => React.ReactNode;
  color?: string;
}

const ListIcon: React.FC<Props> = ({
  iconComponent,
  color,
}: Props): React.JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
      ]}
    >
      <View style={styles.contentContainer}>{iconComponent!()}</View>
    </View>
  );
};

export default ListIcon;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 6,
    justifyContent: "center",
    alignContent: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
