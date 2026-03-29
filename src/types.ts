export interface Option<T extends string = string> {
  code: T;
  name: string;
  rules: string;
  tools?: Option[];
}
