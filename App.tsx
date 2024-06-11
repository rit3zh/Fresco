import "react";
import { Appearance } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "@/shared";

Appearance.setColorScheme("dark");
export default function App(): React.JSX.Element &
  React.ReactNode &
  React.ReactElement {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
