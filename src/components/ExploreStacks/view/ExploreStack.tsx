import { View, Text } from "react-native";
import React from "react";
import { IProps } from "./props";
import { ExploreStacKStyle as styles } from "./styles";
import FastImage from "react-native-fast-image";
import Bounceable from "@freakycoder/react-native-bounceable";

const ExploreStackView: React.FC<IProps> = ({
  image,
  title,
  _index,
  _length,
  onPress,
}: IProps): React.JSX.Element => {
  return (
    <Bounceable onPress={() => onPress!(title, image as string)}>
      <View
        style={[
          styles.container,
          {
            marginBottom: _index === _length - 1 ? 50 : 0,
          },
        ]}
      >
        <View style={[styles.contentContainer]}>
          <View style={styles.imageContainer}>
            <FastImage source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.titleWrapperContainer}>
            <Text style={[styles.title]}>{title}</Text>
          </View>
        </View>
      </View>
    </Bounceable>
  );
};

export default ExploreStackView;
