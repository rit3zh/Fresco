import { FlatList } from "react-native";
import React, { useState } from "react";
import type { Props } from "./types";
import { uuid } from "@/utils/common/uuid";
import RenderItem from "../children/RenderItem";

const Selector: React.FC<Props> = ({ ...props }: Props) => {
  const [selectedName, setSelectedName] = useState<string | null>(
    props.data[0].name
  );

  const handlePress = (name: string) => {
    setSelectedName(name);
  };
  return (
    <FlatList
      horizontal
      scrollEnabled={true}
      data={props.data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={() => uuid()}
      renderItem={({ item }) => (
        <>
          <RenderItem
            isSelected={item.name === selectedName}
            onPress={handlePress}
            name={item.name}
          />
        </>
      )}
    />
  );
};

export default Selector;
