# Testing React Components with Enzyme

In this sample, we are going to provide some examples of use of Jest's mocking capabilities, working on the previous samples.

## Prerequisites

The starting point for this sample will be the code in "02 Testing React components with Enzyme". Clone its contents and install the corresponding dependencies (`npm install`). Then, start the app with `npm run start` and open `http://localhost:8080` in any browser. You should be seeing a very simple webpage showing three input fields alongside matching buttons labelled from 1 to 3.

## Jest mock functions
The most simple approach to mocks in Jest involves replacing whatever functions, methods or callbacks we need to call with a mock function, created using the method `jest.fn()`. We have already seen some examples of this approach in the previous sample, as we needed to mock the callbacks that our Page component was sending to our `InputForm` component through the `props` object. Let's see a bit more in depth what mock functions provide. First of all, let's add some changes to some of our files:
- Add a new prop in InputForm props, `src/pages/mainPage/components/inputForm/inputForm.tsx`
```diff
interface State {
  fieldA: string;
  fieldB: string;
  fieldC: string;
}

export interface Props {
  onButtonAClick: (fieldA: string) => void;
  onButtonBClick: (fieldB: string) => void;
  onButtonCClick: (fieldC: string) => void;
+  generateNumberFromSeed?: (num: number) => number;
}
```

- And provide a suitable implementation from the parent component, `src/pages/mainPage/mainPage.tsx`
```diff
import * as React from 'react';
import { InputForm, InputFormProps } from './components';

const inputFormProps: InputFormProps = {
  onButtonAClick: console.log,
  onButtonBClick: console.log,
  onButtonCClick: console.log,
+  generateNumberFromSeed: (num: number): number => num && !Number.isNaN(num) ? num + 3 : 3,
}
```

- Now let's add a new button in our `InputForm` component, along with a suitable `onClick` handler (quick heads-up: we are changing our component's DOM layout, so we should expect our snapshot test to fail until we update the snapshot itself):
```diff
+  public handleMathAway = () => {
+    const a = this.props.generateNumberFromSeed(Number(this.state.fieldA));
+    const b = Number(this.state.fieldB);
+    const c = Number(this.state.fieldC);
+    const result = c ? (a + b) / c : null;
+    this.props.onButtonAClick(String(result));
+  };

  public render() {
    return (
      <div>
+       <div>
          <TextField
            id="field_A"
            value={this.state.fieldA}
            onChange={this.handleTextFieldChange('fieldA')}
          />
          <Button
            color="primary"
            onClick={this.handleButtonClick('fieldA')}
          >
            Button A
          </Button>
          <TextField
            id="field_B"
            value={this.state.fieldB}
            onChange={this.handleTextFieldChange('fieldB')}
          />
          <Button
            color="secondary"
            onClick={this.handleButtonClick('fieldB')}
          >
            Button B
          </Button>
          <TextField
            id="field_C"
            value={this.state.fieldC}
            onChange={this.handleTextFieldChange('fieldC')}
          />
          <Button
            color="default"
            onClick={this.handleButtonClick('fieldC')}
          >
            Button C
          </Button>
        </div>
        <div>
+          <Button
+            id="math"
+            color="primary"
+            onClick={this.handleMathAway}
+          >
+            MATH AWAY
+          </Button>
+        </div>
      </div>
    );
  }
}
```

- We also need to slightly modify one of the tests in `src/pages/mainPage/components/inputForm/inputForm.spec.tsx` as we now have four different buttons instead of three:
```diff
  it('should render three text fields and three buttons', () => {
    const wrapper = shallow(<InputForm {...props} />);
    expect(wrapper.find(TextField).length).toBe(3);
-    expect(wrapper.find(Button).length).toBe(3);
+    expect(wrapper.find(Button).length).toBe(4);
    expect(wrapper.find(TextField).at(0).prop('id')).toBe('field_A');
    expect(wrapper.find('#field_B').prop('id')).toBe('field_B');
    expect(wrapper.find('[color="default"]').text()).toBeTruthy();
    expect(wrapper.find(Button).filter('[color="default"]')).toHaveLength(1);
  });
```

With this new setup, let's start writing some tests. We will be modifying `src/pages/mainPage/components/inputForm/inputForm.spec.tsx` file to add a new `describe` block with the code below:
```diff
+ describe('InputForm - Mocks', () => {
+   const setFields = (wrapper: any, fieldA: string, fieldB: string, fieldC: string) => {
+     wrapper.find('#field_A').simulate('change', { target: { value: fieldA } });
+     wrapper.find('#field_B').simulate('change', { target: { value: fieldB } });
+     wrapper.find('#field_C').simulate('change', { target: { value: fieldC } });
+   }
+
+   beforeEach(() => {
+     props = {...baseProps}
+   })
+
+   it('should generate a new number using field A as the seed when clicking on the Math Away button', () => {
+     const [fieldA, fieldB, fieldC] = ['2', '3', '4'];
+     const expectedArgument = 2;
+     props.generateNumberFromSeed = jest.fn();
+     props.onButtonAClick = jest.fn();
+     const wrapper = shallow(<InputForm {...props} />);
+     setFields(wrapper, fieldA, fieldB, fieldC);
+     wrapper.find('#math').simulate('click');
+     expect(props.generateNumberFromSeed).toHaveBeenCalledWith(expectedArgument);
+   });
+ });
```

First thing to notice: we are reusing the global variable `props`. Since we are always resetting the contents of said variable before each test (by calling `beforeEach`), we do not have to fear about any unwanted effects leaking from one describe block or test to another. Nonetheless, global variables are a dangerous source of unintended coupling among tests, so tread with care here. Apart from that, we can see that we have defined an inner function to automatically set the values of the different fields. In a similar way to some of the tests we saw in the previous tutorial, we define our mock functions to replace the corresponding input properties, and later check that we have called them with the values we expect. Let's add another test:

```diff
+  it('should propagate the result of "math away" by calling the on-click callback for button A', () => {
+    const [fieldA, fieldB, fieldC] = ['2', '3', '4'];
+    const expectedResult = '2';
+    const mock = jest.fn();
+    mock.mockReturnValue(5);
+    props.generateNumberFromSeed = mock;
+    props.onButtonAClick = jest.fn();
+    const wrapper = shallow(<InputForm {...props} />);
+    setFields(wrapper, fieldA, fieldB, fieldC);
+    wrapper.find('#math').simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResult);
+  });
```

In this case, we are mocking the value returned by the `generateNumberFromSeed` callback to return 5. Jest provides a wide range of different ways to mock returned values, such as `mockImplementation` to provide a generic anonymous function that replaces the callback, `mockResolvedValue` and `mockRejectedValue` to provide preset Promises resolved or rejected by default respectively, etc. Most of these can also be defined as only-to-be-called-once mocks (i.e. use `mockReturnValueOnce` instead of `mockReturnValue`), in which case the specified value is only returned the first time the mock function is invoked. We can define more than one `...Once` implementation for our mocks, and all of them will be buffered, so that each one is consumed in calling order. Let's see that briefly:

```diff
+  it('should propagate the result of "math away" as many times as it was clicked', () => {
+    const [fieldA, fieldB, fieldC] = ['2', '3', '4'];
+    const expectedResults = ['5', '10', '2', '2', '2'];
+    const mock = jest.fn();
+    mock.mockReturnValue(5);
+    mock.mockReturnValueOnce(17);
+    mock.mockReturnValueOnce(37);
+    props.generateNumberFromSeed = mock;
+    props.onButtonAClick = jest.fn();
+    const wrapper = shallow(<InputForm {...props} />);
+    setFields(wrapper, fieldA, fieldB, fieldC);
+    wrapper.find('#math').simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[0]);
+    wrapper.find('#math').simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[1]);
+    wrapper.find('#math').simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[2]);
+    wrapper.find('#math').simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[3]);
+    wrapper.find('#math').simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[4]);
+  });
```

As we can see, the first two calls to `generateNumberFromSeed` return 17 and 37 respectively, in that order, the same one in which we defined the returned values with `mockReturnValueOnce`. After that, the returned value defauls to the number we specified with `mockReturnValue`. We can also refactor this code to be cleaner to read using the `mock` property of our mock functions, as follows:

```diff
  it('should propagate the result of "math away" as many times as it was clicked', () => {
    const [fieldA, fieldB, fieldC] = ['2', '3', '4'];
-    const expectedResults = ['5', '10', '2', '2', '2'];
-    const mock = jest.fn();
-    mock.mockReturnValue(5);
+    const expectedCalls = [['5'], ['10'], ['2'], ['2'], ['2']];
+    const generateNumberFromSeedMock = jest.fn(() => 5);
    generateNumberFromSeedMock.mockReturnValueOnce(17);
    generateNumberFromSeedMock.mockReturnValueOnce(37);
    props.generateNumberFromSeed = generateNumberFromSeedMock;
    const onButtonAClickMock = jest.fn();
    props.onButtonAClick = onButtonAClickMock;
    const wrapper = shallow(<InputForm {...props} />);
    setFields(wrapper, fieldA, fieldB, fieldC);
    wrapper.find('#math').simulate('click');
-    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[0]);
    wrapper.find('#math').simulate('click');
-    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[1]);
    wrapper.find('#math').simulate('click');
-    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[2]);
    wrapper.find('#math').simulate('click');
-    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[3]);
    wrapper.find('#math').simulate('click');
-    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResults[4]);
+    expect(onButtonAClickMock.mock.calls).toEqual(expectedCalls);
  });
```

The `mock` property holds the actual information on the actions that have been performed on the mock function. In fact, many of the matchers are just syntactic sugar over other slightly more low level checks performed on this `mock` property, e.g. `toHaveBeenCallTimes(x)` is internally implemented as `<mockFunction>.mock.calls.length === x`. The `mock.calls` subproperty is an array that holds one entry for each call that has been performed on the mock, and each entry is also an array containing the arguments sent to the mock function in each call.

## Mocking modules
Let us modify the way `handleMathAway` method work. First of all, let's add a dependency with our `src/lib/simpleMath.ts` module that we had defined for an earlier tutorial, and use the `sum` and `divide` methods instead of the regular sum and divide operations.
- InputForm.tsx:
```diff
import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
+ import { divide, sum } from '../../../../lib/simpleMath';

interface State {
  fieldA: string;
  fieldB: string;
  fieldC: string;
}
...

  public handleMathAway = () => {
    const a = this.props.generateNumberFromSeed(Number(this.state.fieldA));
    const b = Number(this.state.fieldB);
    const c = Number(this.state.fieldC);
-    const result = c ? (a + b) / c : null;
+    const result = divide(sum(a, b), c);
    this.props.onButtonAClick(String(result));
  };
```

Ok, so, it is not exactly the same contract (our `divide` method returns `POSITIVE_INFINITE` instead of null for zero division), but it will suffice for the purposes of our tests. Now, if we were to leave the current tests as-is, we would have a rather weak isolation for our unit tests: some of our tests are running code outside the scope of the component we are testing (i.e., when we click on "Math Away", we are running code from `simpleMath` module in the form of the `sum` and `divide` calls). Thus, if we really want to guarantee 100% isolation from other blocks of code and perform strict unit testing rather than partially entering into integration testing field, we would need to mock the calls to the `simpleMath` module. Jest provides us with a function called `jest.mock()` that automatically replaces every method exported from a given module with `jest.fn()` calls. Let's add the following to our test file:
```diff
import * as React from 'react';
import { shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputForm, Props } from './inputForm';
+ import * as math from '../../../../lib/simpleMath';

+ jest.mock('../../../../lib/simpleMath');

const baseProps: Props = {
  onButtonAClick: () => {},
  onButtonBClick: () => {},
  onButtonCClick: () => {},
};
```

The addition of the line invoking `jest.mock` now changes every call made to the `simpleMath` module's exported function to know be made against mock functions. It is worth noting that the fact that our import statements precede the actual invocation of `jest.mock` is irrelevant: the call to `jest.mock` is hoisted "behind the scenes", so the module is effectively mocked for every test running in this file. Outside of the current file, the ES module will resort to its usual implementation, as expected. Of course, if we run now our tests, some of them will fail, as we are mocking the `sum` and `divide` calls, but a couple of the tests we just coded some lines above where expecting those calls to return actual values. Let us fix the troubling tests then:

```diff
it('should propagate the result of "math away" by calling the on-click callback for button A', () => {
+    (math.sum as jest.Mock).mockReturnValueOnce(8);
+    (math.divide as jest.Mock).mockReturnValueOnce(2);
    const [fieldA, fieldB, fieldC] = ['2', '3', '4'];
    const expectedResult = '2';
    const mock = jest.fn();
    mock.mockReturnValue(5);
    props.generateNumberFromSeed = mock;
    props.onButtonAClick = jest.fn();
    const wrapper = shallow(<InputForm {...props} />);
    setFields(wrapper, fieldA, fieldB, fieldC);
    wrapper.find('#math').simulate('click');
    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResult);
+    expect(math.sum).toHaveBeenLastCalledWith(5, 3);
+    expect(math.divide).toHaveBeenLastCalledWith(8, 4);
  });

  it('should propagate the result of "math away" as many times as it was clicked', () => {
    // Arrange
+    const expectedSumCalls = [ [17, 3], [37, 3], [5, 3], [5, 3], [5, 3] ];
+    const expectedDivideCalls = [ [20, 4], [40, 4], [8, 4], [8, 4], [8, 4] ];
+    (math.sum as jest.Mock).mockReturnValueOnce(20);
+    (math.sum as jest.Mock).mockReturnValueOnce(40);
+    (math.sum as jest.Mock).mockReturnValue(8);
+    (math.divide as jest.Mock).mockReturnValueOnce(5);
+    (math.divide as jest.Mock).mockReturnValueOnce(10);
+    (math.divide as jest.Mock).mockReturnValue(2);
    const [fieldA, fieldB, fieldC] = ['2', '3', '4'];
    const expectedCalls = [['5'], ['10'], ['2'], ['2'], ['2']];
    const generateNumberFromSeedMock = jest.fn(() => 5);
    generateNumberFromSeedMock.mockReturnValueOnce(17);
    generateNumberFromSeedMock.mockReturnValueOnce(37);
    props.generateNumberFromSeed = generateNumberFromSeedMock;
    const onButtonAClickMock = jest.fn();
    props.onButtonAClick = onButtonAClickMock;
    // Act
    const wrapper = shallow(<InputForm {...props} />);
    setFields(wrapper, fieldA, fieldB, fieldC);
    wrapper.find('#math').simulate('click');
    wrapper.find('#math').simulate('click');
    wrapper.find('#math').simulate('click');
    wrapper.find('#math').simulate('click');
    wrapper.find('#math').simulate('click');
    // Assert
    expect(onButtonAClickMock.mock.calls).toEqual(expectedCalls);
+    expect((math.sum as jest.Mock).mock.calls).toEqual(expectedSumCalls);
+    expect((math.divide as jest.Mock).mock.calls).toEqual(expectedDivideCalls);
  });

  afterEach(() => {
+    (math.sum as jest.Mock).mockReset();
+    (math.divide as jest.Mock).mockReset();
  });
```

So, there is a lot of stuff going on here. First of all, it is worth noting that these two tests have grown too much in complexity and may be testing too many things at the same time, so if this were a real development, we should be seriously considering to split them up into smaller items. That said, the first thing we need to do is to provide suitable implementations for each of the mocked functions. To that end, we are just returning a mocked value according to the values used in the test. The second thing to notice is that we have added additional assertions to confirm that the `sum` and `divide` methods were being called as expected by our component. Thus, we check on the `mock` property of the resulting mock functions to see that the history of calls performed matches what we were sending. Last but not least, in order to ensure isolation between tests, we now need to clear our mocks. Why do we need to do this now and not before? The reasoning here is that before our mock functions were being declared locally to each test and later replaced by the beforeEach method (as it restored the `props` object and all of our mocks lay there). This time, however, `sum` and `divide` are mocks with a global scope to our whole file. If we do not reset the status of said mocks, we may be seeing unintended side effects. For example, we may find out that the `mock.calls` property remembers every single call performed in prior tests. Fortunately, we can use an `afterEach` invocation to prevent this behaviour. Some final notes on this: jest provides both `mockClear` and `mockReset` methods. The former resets usage data but not the implementation of each mock, while the latter resets everything (effectively restoring the mock function to its initial state). Any of them is fine for our code here.

### Providing mocks in `__mocks__` folder

One final note regarding mocking modules: the approach followed so far provides mock fuctions on a per-test-file case. However, we might picture some modules for which we may wish to have a base mocked implementation by default. This can be done using special `__mocks__` folders and implementing the module mocks inside them. Let's see this with an example: first, we are going to copy our `src/lib/simpleMath.ts` module into a new module `src/lib/simpleMath2.ts`. Then, we are going to add a `__mocks__` in our `src/lib` folder. Inside this `__mocks__` folder, we are going to create a `simpleMath2.ts` file, as follows:
- `src/lib/__mocks__/simpleMath.ts`
```diff
+ export const sum = jest.fn((a: number, b: number): any => `I'm mocked!! ${a} + ${b}`);

+ export const prod = jest.fn((a: number, b: number): any => `I'm mocked!! ${a} * ${b}`);

+ export const divide = jest.fn((a: number, b: number): any => `I'm mocked!! ${a} / ${b}`);
```

And now, we are going to import the new module inside our `inputForm.spec.tsx` test file and create a new (and rather silly) test to illustrate that the default mocked is working as expected.
```diff
import * as React from 'react';
import { shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputForm, Props } from './inputForm';
import * as math from '../../../../lib/simpleMath';
+ import * as math2 from '../../../../lib/simpleMath2';

jest.mock('../../../../lib/simpleMath');
+ jest.mock('../../../../lib/simpleMath2');

const baseProps: Props = {
  onButtonAClick: () => {},
  onButtonBClick: () => {},
  onButtonCClick: () => {},
};

...

+  it('should be calling the default manual mocks defined in __mocks__ for the simpleMath2 module imported', () => {
+    const x = math2.sum(3, 5);
+    const y = math2.prod(2, 7);
+    const z = math2.divide(1, 9);
+    expect(x).toBe(`I'm mocked!! 3 + 5`);
+    expect(y).toBe(`I'm mocked!! 2 * 7`);
+    expect(z).toBe(`I'm mocked!! 1 / 9`);
+  });
```

As you can see, we have not provided any implementation whatsoever in our test file for any of the methods in `simpleMath2`. However, when calling the specific entry points of the module, instead of the default implementation for an off-the-shelf mocked module (which would just be a mock function that returns no value, hence giving out `undefined` result), we get the exact same behaviour we had coded inside our `__mocks__` folder.

A couple of extra points to consider:
- By default, the implementation provided in `__mocks__` is only applied when we explicitly call `jest.mock(<module-name>)` in our test suite. There are however two exceptions to this rule:
-- when mocking the contents of `node_modules` (by placing a `__mocks__` at the same level as `node_modules` folder), the mocks are applied by default.
-- there is a configuration setting called `automock` that, if set to `true`, enforces the use of the implementations provided by `__mocks__`folders by default.
- `__mocks__` folders are case sensitive

On top of all of this, if we do not want to use a given default implementation, we can always call `jest.unmock(<module-name>)`, which will restore the connection to the original module, bypassing the implementation covered in `__mocks__` folders.

## Spies and mocks
Sometimes we do not need to mock a whole module or, in the case of integration tests, we may want to mock some methods for some tests and keep the original implementation for others. For this cases, you may found that "spying" on the module or method to be mocked is more useful than actually mocking the whole module straight-away. Jest provides a method called `jest.spyOn` that covers this functionality.

Let us code some examples using spies. First, we are going to create a new fake module inside our `src/lib` folder called `complexMath.ts`, with the following contents:
```diff
export const performComplexMath = (data: number[]): number => {
+   if (!data || !data.length) {
+     return null;
+   }
+   const r1 = data.reduce((prev, curr) => Math.sqrt(prev^3 + Math.log2(curr^2)), 1);
+   const r2 = data.reduce((prev, curr) => Math.sqrt(curr^3 + Math.log2(prev^2)), 1);
+   return r1 / r2;
+ };
```

Now let's add the corresponding import into our `inputForm.tsx` component, alongside a new method to call the imported function.
```diff
import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { divide, sum } from '../../../../lib/simpleMath';
+ import { performComplexMath } from '../../../../lib/complexMath';

interface State {
  fieldA: string;
  fieldB: string;
  fieldC: string;
}

...

+  public doSomeComplexCalculations = (data: number[]) => {
+    return performComplexMath(data) + performComplexMath(data.map(d => d*d));
+  }
```

We can now add a new test into our test suite to see how we can spy on `performComplexMath`.
```diff
import * as React from 'react';
import { shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputForm, Props } from './inputForm';
import * as math from '../../../../lib/simpleMath';
import * as math2 from '../../../../lib/simpleMath2';
+ import * as complexMath from '../../../../lib/complexMath'

jest.mock('../../../../lib/simpleMath');
jest.mock('../../../../lib/simpleMath2');

const baseProps: Props = {

...

+ describe('InputForm - Spy', () => {
+   beforeEach(() => {
+     props = { ...baseProps };
+   });
+
+   it('should call performComplexMath twice when calling doSomeComplexCalculations', () => {
+     const mock = jest.spyOn(complexMath, 'performComplexMath');
+     const component = new InputForm(props)
+     component.doSomeComplexCalculations([1, 2, 3]);
+     expect(mock).toHaveBeenCalledTimes(2);
+     expect(mock.mock.calls).toEqual([[[1, 2, 3]],[[1, 4, 9]]]);
+     mock.mockClear();
+   });
+ });
```

So, first thing to note here that is different from just mocking the function is that the spied method is still called. This quite peculiar from Jest, as most testing libraries do not call the spied method by default. This means that this test here is not trully a unit test: we are actually running code from inside `complexMath` library. Other than that, the mock returned by `jest.spyOn` behaves in almost exactly the same way as the regular mocks we have seen in the previous examples. The `mockClear()` call is here to ensure that sucessive tests are not affected by previous calls of the mock. Let's add a second test.

Let's add a second test to illustrate a second difference.

```diff
+  it('should call performComplexMath twice when calling doSomeComplexCalculations v2', () => {
+    const mock = jest.spyOn(complexMath, 'performComplexMath');
+    mock.mockImplementation(() => 1);
+    const expectedResult = 2;
+    const component = new InputForm(props)
+    const result = component.doSomeComplexCalculations([1, 2, 3]);
+    expect(result).toBe(expectedResult);
+    expect(mock).toHaveBeenCalledTimes(2);
+    expect(mock.mock.calls).toEqual([[[1, 2, 3]],[[1, 4, 9]]]);
+    mock.mockRestore();
+  });
```

In this case we do use a mock function that replaces the execution of the actual `performComplexMath` method, thus truly creating a real unit test this way. The `mockRestore()` method is similar to `mockReset` or `mockClear`: pretty much in the same way as `mockReset`, `mockRestore` removes any data usage history or mocked implementation previously associated with the spied function, but now with the additional effect of also restoring the original functionality of the spied method. Thus, if a third test were to call `performComplexMath` without any further mocking, the original implementation of the `complexMath` module would be used.
