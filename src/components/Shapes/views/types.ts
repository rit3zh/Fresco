import { StyleProp, TextStyle } from "react-native";

export interface Props {
  iconComponent?: () => React.ReactNode & JSX.Element;
  color?: string;
  width?: number;
  height?: number;
  text?: string;
  fontStyle?: StyleProp<TextStyle>;
}
