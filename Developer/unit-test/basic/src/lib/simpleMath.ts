export const sum = (a: number, b: number): number => {
  if (a == null || b == null) {
    return null;
  }
  return a + b;
}

export const prod = (a: number, b: number): Promise<Number> => {
  if (a == null || b == null) {
    return Promise.reject('Me not do null prods');
  }
  return Promise.resolve(a * b);
}

export const divide = (a: number, b: number): number => {
  if (a == null || b == null) {
    return null;
  } else if (!b) {
    return Number.POSITIVE_INFINITY;
  }
  return a / b;
}