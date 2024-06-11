import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export function useResponsiveSize() {
  const width = wp;
  const height = hp;
  return [width, height];
}
