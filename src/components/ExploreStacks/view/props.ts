export interface IProps {
  _index: number;
  _length: number;
  image?: string;
  title?: string;
  onPress?: (title?: string, image?: string) => any;
}
