import { TabBar } from "@/enums/TabBarEnum";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface Props {
  name: string;
  focused?: boolean;
  size?: number;
}

export const TabBarIcon: React.FC<Props> = ({
  ...props
}: Props): React.JSX.Element => (
  <React.Fragment>
    <Ionicons
      name={props.name as any}
      size={props.size}
      color={props.focused ? TabBar.ActiveTintColor : TabBar.InActiveTintColor}
    />
  </React.Fragment>
);
