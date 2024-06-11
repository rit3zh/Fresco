import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import type { IProps } from "./props";
import { TitleViewStyles as styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
const TitleView: React.FC<IProps> = ({
  ...props
}: IProps): React.JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={props.onClick}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text
            style={[
              styles.title,
              {
                fontSize: props.fontSize ? props.fontSize : 20,
              },
            ]}
          >
            {props.title}
          </Text>
        </View>
        {!props.chevron ? (
          <></>
        ) : (
          <View style={styles.chevronView}>
            <Ionicons name="chevron-forward" color={"gray"} size={20} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TitleView;
