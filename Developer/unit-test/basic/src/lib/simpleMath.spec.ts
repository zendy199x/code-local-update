import { divide, prod, sum } from './simpleMath';

describe('simpleMath.sum', function() {
  it('should return null if any of the args is nullable', () => {
    // Arrange
    const nullArg = null;
    const undefinedArg = undefined;
    const x = 3;
    const y = 2;
    const expectedResult = null;

    // Act
    const result1 = sum(nullArg, y);
    const result2 = sum(undefinedArg, y);
    const result3 = sum(x, nullArg);
    const result4 = sum(x, undefinedArg);

    // Assert
    expect(result1).toBe(null);
    expect(result2).toBeNull();
    expect(result3).toEqual(expectedResult);
    expect(result4).toBeFalsy();
  });

  test('should return the sum of the values provided', () => {
    const x = 2;
    const y = 5;
    const expectedResult = 7;
    const result = sum(x, y);
    expect(result).toEqual(expectedResult);
    expect(result).not.toBeNull();
  });
});

describe('simpleMath.divide', function() {
  let x = null;
  let y = null;

  beforeEach(() => {
    x = 0;
    y = 0;
  });

  it('should return infinite when dividing by 0', () => {
    x = 3;
    const expectedResult = Number.POSITIVE_INFINITY;
    const result = divide(x, y);
    expect(result).toBe(expectedResult);
  })

  it('should return 0 if the numerator is 0 and the denominator is not', () => {
    y = 4;
    const result = divide(x, y);
    expect(result).toBe(0);
  });

  it('should return the division of the first argument by the second one if none of them are nullable or zero', () => {
    x = 15;
    y = 5;
    const result = divide(x, y);
    expect(result).toBe(3);
  })
});

describe('simpleMath.prod', () => {
  it('should reject the call if one of the operands is null', (done) => {
    const x = 3;
    const y = null;
    prod(x, y).catch(errorMessage => {
      expect(errorMessage).toBe('Me not do null prods');
      done();
    });
  });

  it('should resolve the product of two valid operands', (done) => {
    const x = 2;
    const y = 5;
    const expectedResult = 10;
    prod(x, y).then(result => {
      expect(result).toBe(expectedResult);
      done();
    });
  });
});

describe(`toEqual vs toBe`, () => {
  it('should compare contents with toEqual and ref values or literals with toBe', () => {
    const object1 = { a: 3, b: 5 };
    const object2 = { a: 3, b: 5 };
    const array1 = [1, 2, 4, 8];
    const array2 = [1, 2, 4, 8];
    expect(object1).toEqual(object2);
    expect(object1).not.toBe(object2);
    expect(array1).toEqual(array2);
    expect(array1).not.toBe(array2);
  });
});