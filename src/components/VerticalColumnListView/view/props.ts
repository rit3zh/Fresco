export interface IProps {
  image: string;
  tags?: Tags[];
  title?: string;
  id?: string;
  index: number;
  length?: number;
  onPress?: (item: Omit<IProps, "onPress">) => any | void;
}

interface Tags {
  name?: string;
  url?: string;
}
