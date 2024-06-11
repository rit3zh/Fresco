export interface Props {
  children: React.ReactNode;
  image?:
    | string
    | "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630";
  title?: string;
  headerTitle?: string;
  headerLeft?: () => React.ReactNode;
  headerRight?: () => React.ReactNode;
  topBarRight?: () => React.ReactNode;
  onPress?: () => any;
}
