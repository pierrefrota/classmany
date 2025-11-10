type ClassManyObject = { [key: string]: boolean };
type ClassManyArgs = Array<
  string | ClassManyObject | boolean | undefined | null
>;
export type ClassMany = (...args: ClassManyArgs) => string;
