export interface LoginFormProps {
  onFinish: any;
}
export interface RegisterFormProps {
  onFinish?: any;
  isShowButton?: boolean;
  form?: any;
  dataForm?: any;
}

export interface CardProps {
  children?: any;
  style?: any;
  data?: any;
}

export interface HeaderBodyProps {
  styleSearch?: object;
  styleTitle?: object;
  styleButton?: object;
  title?: any;
  onSearch?: any;
  onClick?: any;
  titleButton?: any;
}
