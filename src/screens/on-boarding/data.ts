import { colors } from "@/utils/constants";

export interface OnboardingData {
  id: number;
  animation: any;
  text: string;
  textColor: string;
  backgroundColor: string;
  animationBg: string;
  description?: string;
  iconColor?: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require("./assets/OnBoardAnimation.json"),
    text: "Welcome to Fresco",
    description:
      "Discover a world of stunning wallpapers to personalize your device. Let's get started!",
    textColor: "#ffffff",
    backgroundColor: "black",
    animationBg: "transparent",
  },
  {
    id: 2,
    animation: require("./assets/OnBoardAnime.json"),
    text: "Explore Endless Collections",
    description:
      "Browse through our vast collection of high-quality wallpapers, curated to fit every style and preference.",
    textColor: "#000000",
    backgroundColor: "white",
    animationBg: "#003cc9",
    iconColor: "white",
  },
  {
    id: 3,
    animation: require("./assets/Wallpaper.json"),
    text: "Instant Wallpaper Updates",
    description:
      "Quickly set your favorite wallpapers with just a few taps. Refresh your device's look effortlessly!",
    textColor: "white",
    backgroundColor: "#6fe1e1ff",
    animationBg: "transparent",
  },
];

export default data;
