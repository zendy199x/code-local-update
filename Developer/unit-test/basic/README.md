# Basic Testing with Jest

In this sample, we are going to focus on undestanding the most basic concepts behind testing in Jest, using a very simple ES module that provides a crude implementation of some elementary math functions.

## Prerequisites

The starting point for this sample will be the code in "00 Base Sample". Clone its contents and install the corresponding dependencies (`npm install`). Then, start the app with `npm run start` and open `http://localhost:8080` in any browser. You should be seeing a placeholder page displaying the text "Hello React!!"

## Create a simple lib module

Now we are going to code a simple module to perform some basic mathematical operations. Create a new folder `src/lib/` and add a new file named `simpleMath.ts` to it. The contents of the file should be as follows:
```diff
+export const sum = (a: number, b: number): number => {
+  if (a == null || b == null) {
+    return null;
+  }
+  return a + b;
+}
+
+export const prod = (a: number, b: number): number => {
+  if (a == null || b == null) {
+    return null;
+  }
+  return a * b;
+}
+
+export const divide = (a: number, b: number): number => {
+  if (a == null || b == null) {
+    return null;
+  } else if (!b) {
+    return Number.POSITIVE_INFINITY;
+  }
+  return a / b;
+}
```

## Add a test suite for the new module

Now let's create a new file named `simpleMath.spec.ts` inside the `src/lib/` folder. Since our Jest configuration inside `package.json` checks for any files ending in `.spec.ts` or `spec.tsx`, the contents of this file will be automatically included in the batch of tests to run once we launch the corresponding Jest command. Let's start adding some code to our test file.
```diff
+import { divide, sum } from './simpleMath';
+
+describe('simpleMath.sum', function() {
+  it('<test description>', () => {
+  });
+});
```

When defining our test suites, we can organize our test in semantic blocks using the `describe` function and encapsulating the contents of the block into an anonymous callback function that is provided to `describe` as a param. In the code above, we are creating a `describe` block to cover the tests regarding the `sum` method imported from our `simpleMath` module. Each subsequent test is defined by calling the `test` function or the `it` function (`it` is an alias for `test`), usually with two arguments: a brief description of what is being tested, and a callback containing the actual code to run the test. Let us now add our first test.
```diff
describe('simpleMath.sum', function() {
-  it('<test description>', () => {
+  it('should return null if any of the args is nullable', () => {
+    // Arrange
+    const nullArg = null;
+    const undefinedArg = undefined;
+    const x = 3;
+    const y = 2;
+    const expectedResult = null;
+
+    // Act
+    const result1 = sum(nullArg, y);
+    const result2 = sum(undefinedArg, y);
+    const result3 = sum(x, nullArg);
+    const result4 = sum(x, undefinedArg);
+
+    // Assert
+    expect(result1).toBe(null);
+    expect(result2).toBeNull();
+    expect(result3).toEqual(expectedResult);
+    expect(result4).toBeFalsy();
  });
```

So this is a very simple test focused on sanitizing input. Our `sum` method should return `null` if any of the inputs are nullable. Most of the time, tests can be easily organized in three stages: arrange, act and assert, that is, first we arrange our input and other auxiliary variables, then we perform the actual action (i.e. calling the method we to test), and finally we check if the results received meet with our expectations. Most of the time, we will be usint a `toBe` or `toEqual` method to check that the final result matches the expected value, although in the case of `truthiness` we can also resort to specific methods, such as `toBeNull` to check whether the test passes or not (we are being a bit overexhaustive with the coverage of cases here, but it is just for academic purposes). Also, keep in mind that `toBeFalsy` is not strictly speaking the best matcher option to check for strict `null/undefined` equality.

Let's add now a second test to cover the case when both operands are valid
```diff
+  test('should return the sum of the values provided', () => {
+    const x = 2;
+    const y = 5;
+    const expectedResult = 7;
+    const result = sum(x, y);
+    expect(result).toEqual(expectedResult);
+    expect(result).not.toBeNull();
+  });
```

And that's the gist of it. For the sake of completeness, we have also added a negative matcher here, which does not really make much sense, as fulfilling the first expectation forcefully implies that `result` is non-null, but this way we can see how negative matching can be used to cover more complex cases.There are many other matchers that can be used depending on the nature of the data being compared, such as `toBeGreaterThan` (for numbers), `toMatch` (for strings and regexp) or `toHaveLength` (forArrays).

## Perform operations between tests

Now let's add a second block of tests, this time for the divide method. Also, for this test, we are going to define a couple of variables inside the scope of the `describe` block, thus making these variables global to every test it contains. Since these variables will be shared across the different tests, it would make sense to initialize them to a known value before running each test. We can achieve this using the special method `beforeEach`. Other similar methods are `beforeAll`, `afterAll`, `afterEach`, ...
```diff
+describe('simpleMath.divide', function() {
+  let x = null;
+  let y = null;
+
+  beforeEach(() => {
+    x = 0;
+    y = 0;
+  });
+
+  it('should return infinite when dividing by 0', () => {
+    x = 3;
+    const expectedResult = Number.POSITIVE_INFINITY;
+    const result = divide(x, y);
+    expect(result).toBe(expectedResult);
+  })
+
+  it('should return 0 if the numerator is 0 and the denominator is not', () => {
+    y = 4;
+    const result = divide(x, y);
+    expect(result).toBe(0);
+  });
+
+  it('should return the division of the first argument by the second one if none of them are nullable or zero', () => {
+    x = 15;
+    y = 5;
+    const result = divide(x, y);
+    expect(result).toBe(3);
+  })
+});
```

## Testing asynchronous methods

Next, we are going to modify our `simpleMath` module slightly so that our `prod` method now returns a Promise instead of a straight number. Apply the following changes:
```diff
-export const prod = (a: number, b: number): Promise<Number> => {
+export const prod = (a: number, b: number): Promise<Number> => {
  if (a == null || b == null) {
-    return null;
+    return Promise.reject('Me not do null prods');
  }
-  return a * b;
+  return Promise.resolve(a * b);
}
```

Let's see how we can test the `prod` method now that it returns a Promise. First of all, let's import the corresponding dependency in `simpleMath.spec.ts`
```diff
-import { divide, sum } from './simpleMath';
+import { divide, prod, sum } from './simpleMath';
```

And let us add the following `describe` block:
```diff
+describe('simpleMath.prod', () => {
+  it('should reject the call if one of the operands is null', (done) => {
+    const x = 3;
+    const y = null;
+    prod(x, y).catch(errorMessage => {
+      expect(errorMessage).toBe('Me not do null prods');
+      done();
+    });
+  });
+
+  it('should resolve the product of two valid operands', (done) => {
+    const x = 2;
+    const y = 5;
+    const expectedResult = 10;
+    prod(x, y).then(result => {
+      expect(result).toBe(expectedResult);
+      done();
+    });
+  });
+});
```

There are two things to consider here: first, since a Promise is something that is resolved/rejected asynchronously, we need to somehow, so to speak, tell the test to wait for the promise to complete. We achieve this by using the method `done`, which is provided as an arg in the callback defining the test. The test will then end only when we call said method. The second thing to notice here is that we obviously need to check the expected values through the use of an on-success callback in the `then` method or by catching the rejection in `catch`. If we were to assert our expectations as before, we would be checking on the Promise object rather than the real result of the call, which can be done in terms of code for this simple example, but it is not replicating the real behaviour of, say, an AJAX call.

## Do not mix toBe and toEqual!!

Finally, one last 'gotcha': let's add one last `describe` block as follows:
```diff
+describe(`toEqual vs toBe`, () => {
+  it('should compare contents with toEqual and ref values or literals with toBe', () => {
+    const object1 = { a: 3, b: 5 };
+    const object2 = { a: 3, b: 5 };
+    const array1 = [1, 2, 4, 8];
+    const array2 = [1, 2, 4, 8];
+    expect(object1).toEqual(object2);
+    expect(object1).not.toBe(object2);
+    expect(array1).toEqual(array2);
+    expect(array1).not.toBe(array2);
+  });
+});
```

This last test simply shows the difference between these two matchers. For literals, such as numbers, `toBe` and `toEqual` perform in exactly the same way. But when working with arrays or objects, `toBe` simply compares the object identities (array1 is different from array2, even if they have the same contents), while `toEqual` tries to match the contents of the entities compared (deep equality).

If we run our tests (`npm run test` or just `npm test`), we can see that all of the 8 tests implemented will run successfully.