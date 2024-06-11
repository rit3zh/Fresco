export interface IColors {
  _core: string;
  background?: Background;
  title?: string;
  description?: string;
  button?: IButton;
  icon?: Icon;
}

interface IButton {
  tag?: string;
  normal?: string;
}

interface Icon {
  button?: string;
  normal?: string;
}

interface Background {
  image?: string;
  imageColorCode?: string[];
  normal?: string;
}
