export const performComplexMath = (data: number[]): number => {
  if (!data || !data.length) {
    return null;
  }
  const r1 = data.reduce((prev, curr) => Math.sqrt(prev^3 + Math.log2(curr^2)), 1);
  const r2 = data.reduce((prev, curr) => Math.sqrt(curr^3 + Math.log2(prev^2)), 1);
  return r1 / r2;
};
