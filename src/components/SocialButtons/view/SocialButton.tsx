import { View, Text } from "react-native";
import React from "react";
import { Props } from "./props";
import { SocialButtonStyles as styles } from "./styles";
import FastImage from "react-native-fast-image";

const SocialButton: React.FC<Props> = ({
  ...props
}: Props): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: props.image }}
        style={[
          styles.image,
          {
            width: props?.width ? props.width : 30,
            height: props?.height ? props.height : 30,
          },
        ]}
      />
      <Text style={styles.text}>
        {props.login ? "Log in" : "Sign up"} with {props.text}
      </Text>
    </View>
  );
};

export default SocialButton;
