import type { Props } from "./types";
import React from "react";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import { TopNavBar } from "../childrens/TopBar";
import { HeaderNavBar } from "../childrens/HeaderNavBar";
import { Header } from "../childrens/Header";
import { Text } from "react-native";

const NativeHeaderScrollView: React.FunctionComponent<Props> = ({
  ...props
}: Props): React.JSX.Element & React.ReactNode => {
  return (
    <AnimatedScrollView
      TopNavBarComponent={
        <TopNavBar
          onPress={() => props.onPress!()}
          size={23}
          title={props.title}
        />
      }
      HeaderNavbarComponent={
        <HeaderNavBar
          onLeftPress={() => props?.onPress!()}
          color="white"
          size={18}
          leftIcon="chevron-back"
        />
      }
      HeaderComponent={
        <Header image={props.image as string} title={props.title} />
      }
    >
      {props.children}
    </AnimatedScrollView>
  );
};

export default NativeHeaderScrollView;
