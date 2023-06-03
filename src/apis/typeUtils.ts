function isTypeOf<T>(arg: T | undefined): arg is T {
  return arg !== undefined;
}

export default isTypeOf;
