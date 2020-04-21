# Testing React Components with Enzyme

In this sample, we are going to use Jest and Enzyme to write unit tests for our React Components coded with Typescript.

## Prerequisites

The starting point for this sample will be the code in "01 Basic Testing with Jest". Clone its contents and install the corresponding dependencies (`npm install`). Then, start the app with `npm run start` and open `http://localhost:8080` in any browser. You should be seeing a placeholder page displaying the text "Hello React!!"

## Add a React Component

Our first step will be to create a React component and render it. In order to do this, we are going to refactor the code in `src/pages/` folder slightly. First, let's create a `src/pages/mainPage/` folder and move `mainPage.tsx` inside. We will also need to copy `src/pages/index.ts` onto `src/pages/mainPage/` as well. After that, we can refactor the contents of `src/pages/index.ts` as follows.
```diff
-export { MainPage } from './mainPage'
+export * from './mainPage';
```

Going back to `src/pages/mainPage`, we are now going to create a new `components/` subfolder, which will in turn an `inputForm/` folder as well. Each folder will also hold an `index.ts` file, and `src/pages/mainPage/components/inputForm/` will also contain an empty `inputForm.tsx` file. Now we are going to populate these files as indicate in the lines below.

- `src/pages/mainPage/components/inputForm/inputForm.tsx`
```diff
+import * as React from 'react';
+import Button from '@material-ui/core/Button';
+import TextField from '@material-ui/core/TextField';
+
+interface State {
+  fieldA: string;
+  fieldB: string;
+  fieldC: string;
+}
+
+export interface Props {
+  onButtonAClick: (fieldA: string) => void;
+  onButtonBClick: (fieldB: string) => void;
+  onButtonCClick: (fieldC: string) => void;
+}
+
+export class InputForm extends React.Component<Props, State> {
+  constructor(props: Props) {
+    super(props);
+    this.state = {
+      fieldA: '',
+      fieldB: '',
+      fieldC: '',
+    }
+  }
+
+  private handleTextFieldChange = (field: keyof State) => (event) => {
+    this.setState({ [field]: event.target.value } as State);
+  }
+
+  private handleButtonClick = (field: keyof State) => () => {
+    switch(field) {
+      case 'fieldA':
+        this.props.onButtonAClick(this.state[field]);
+        break;
+      case 'fieldB':
+        this.props.onButtonBClick(this.state[field]);
+        break;
+      case 'fieldC':
+        this.props.onButtonCClick(this.state[field]);
+        break;
+    }
+  }
+
+  public render() {
+    return (
+      <div>
+        <TextField
+          id="field_A"
+          value={this.state.fieldA}
+          onChange={this.handleTextFieldChange('fieldA')}
+        />
+        <Button
+          color="primary"
+          onClick={this.handleButtonClick('fieldA')}
+        >
+          Button A
+        </Button>
+        <TextField
+          id="field_B"
+          value={this.state.fieldB}
+          onChange={this.handleTextFieldChange('fieldB')}
+        />
+        <Button
+          color="secondary"
+          onClick={this.handleButtonClick('fieldB')}
+        >
+          Button B
+        </Button>
+        <TextField
+          id="field_C"
+          value={this.state.fieldC}
+          onChange={this.handleTextFieldChange('fieldC')}
+        />
+        <Button
+          color="default"
+          onClick={this.handleButtonClick('fieldC')}
+        >
+          Button C
+        </Button>
+      </div>
+    );
+  }
+}
```

- `src/pages/mainPage/components/inputForm/index.ts`
```diff
+export { InputForm, Props as InputFormProps } from './inputForm';
```

- `src/pages/mainPage/components/index.ts`
```diff
+export * from './inputForm';
```

So, let's see what we have done here. The `index.ts` files are there to provide adequate plumbing and isolation across our folder structure. The meat of the changes added lies on `src/pages/mainPage/components/inputForm/inputForm.tsx` file, which defines a rather disordered component that renders 3 editable text fields, each one accompanied by a button. We are importing the Button and TextField components from `material-ui` straight-away. The `InputForm` component holds the value of the three text fields in its State, changing them accordingly whenever the user modifies the contents of any of the text fields. The `InputForm` component also receives three different callbacks as properties from its parent. Each of these callbacks is in turn called whenever the user clicks on one of the buttons. That pretty much sums up what is going on with this component for now. The next and final step will be to add this component to our `MainPage` component so that it can be rendered as one of its children. 

Let us thus modify the contents of `src/pages/mainPage/mainPage.tsx` as per the following:
```diff
import * as React from 'react';
+import { InputForm, InputFormProps } from './components';

+const inputFormProps: InputFormProps = {
+  onButtonAClick: console.log,
+  onButtonBClick: console.log,
+  onButtonCClick: console.log,
+}

export const MainPage = () => {
  return (
    <div>
-      Hello React!!
+      <InputForm {...inputFormProps} />
    </div>
  );
}
```

If we run the app now (`npm start` or `npm run start`), we should see in the browser that the 3 sets of text fields followed by buttons are effectively rendered. The styling is not really good, but it is more than enough for us in regard to our tests.

## Shallow-rendering of React components with Enzyme and snapshot-testing

Let's move back to `src/pages/mainPage/components/inputForm/` folder and create a new test file inside called `inputForm.spec.tsx`. Initially, it will have the next content
```diff
+import * as React from 'react';
+import { shallow } from 'enzyme';
+import { InputForm, Props } from './inputForm';
+
+const baseProps: Props = {
+  onButtonAClick: () => {},
+  onButtonBClick: () => {},
+  onButtonCClick: () => {},
+};
+
+let props: Props = null;
+
+describe('InputForm', () => {
+  beforeEach(() => {
+    props = { ...baseProps };
+  });
+
+  it('should render as expected', () => {
+    const wrapper = shallow(<InputForm {...props} />);
+    expect(wrapper).toMatchSnapshot();
+  });
+});
```

First of all, let's talk a bit about how we can render our components while testing. It is usually said that React is a "view" library, in the sense that React pretty much handles how we render our webpage, sort of "taking the role" of HTML code. However, while React is focused on fast-rendering, we do not really need to fully render a given component in order to test it. Thus, React provides something called `react-test-renderer`, which is a tool that enables testing-driven, quick-rendering of React components to this purpose, keeping the minimal functionality needed to properly test our components. This renderer can render a given component in one of two ways: deep or shallow. Deep-rendering means that the component is rendered across its whole children tree until a leaf component is reached (like, for example, a `div` element). Shallow-rendering does a similar thing, but only renders the component's first level. This means that if a given component A has a child component B which in turn also has children components C and D, deep-rendering component A will render all of the components in the tree (A, B, C and D), while shallow-rendering will only render the contents of component A and a sort of "reference" to its child component B, which is treated as a sort of black-box and not rendered at all. Regarding `enzyme`, this is a library that provides some added high-level functionality to improve upon what `react-test-renderer` offers, but conceptually it is pretty much the same idea: there is a `shallow` method to shallowly render components, and a `mount` method to deep-render them.

For the purpose of this training, we want to focus especially on unit testing. The most pure approach to unit testing a component would assume that any other dependencies surrounding the component to test should be treated as black-boxes: we are not concerned with the actual implementation behind those, only that they follow the contracts that our component expects. In this regard, we are going to focus mostly on using `shallow` to test-render our components. If, however, we need to perform integration tests or perform tests that need to run through the hooks of React components' lifecycles, the we should be using `mount`.

That covers the use of the `shallow` method in the code above. Regarding the `toMatchSnapshot` call, we need to provide some background on snapshots to properly explain what is going on here. Taken straight-away from the Jest documentation page, "Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly. A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component". In the end, this means that snapshots are a serialized representation of the result of rendering our component, and this data is stored inside a `__snapshots__/` folder local to our test. The `toMatchSnapshot` call simply checks if there are changes in the component respect the last time the snapshot was rendered. If no changes are found, the test passes. Otherwise, it fails. This acts as a ward to prevent unexpected, unwanted and unintended changes added as part of some development. Of course, when working on your app, you will also make changes to your component willingly. To prevent the snapshot test from failing in this case, we need to explicitly tell Jest to update our snapshots while running the tests. This can be done adding the `-u` flag to the call (`jest -u`), or, alternatively in our case, we can use the script provided to run our tests, `npm run test:update_snapshots`.

## Traversing our component's node tree
Let's now add a second test to our specs file.
```diff
import * as React from 'react';
import { shallow } from 'enzyme';
+import TextField from '@material-ui/core/TextField';
+import Button from '@material-ui/core/Button';
import { InputForm, Props } from './inputForm';

const baseProps: Props = {
  onButtonAClick: () => {},
  onButtonBClick: () => {},
  onButtonCClick: () => {},
};

let props: Props = null;

describe('InputForm', () => {
  beforeEach(() => {
    props = { ...baseProps };
  });

  it('should render as expected', () => {
    const wrapper = shallow(<InputForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

+  it('should render three text fields and three buttons', () => {
+    const wrapper = shallow(<InputForm {...props} />);
+    expect(wrapper.find(TextField).length).toBe(3);
+    expect(wrapper.find(Button).length).toBe(3);
+  });
});
```

We have now added the references to the imported components from `material-ui` that we are using, and we want to check that we are rendering exactly 3 of them. The method `find` allows us to use a wide range of selectors to find specific elements and components inside our tree of virtual nodes. We can even access each node separately, as per the code below, either by indexing on the first search performed or by using more specific selectors.
```diff
    expect(wrapper.find(TextField).length).toBe(3);
    expect(wrapper.find(Button).length).toBe(3);
+    expect(wrapper.find(TextField).at(0).prop('id')).toBe('field_A');
+    expect(wrapper.find('#field_B').prop('id')).toBe('field_B');
+    expect(wrapper.find('[color="default"]').text()).toBeTruthy();
+    expect(wrapper.find(Button).filter('[color="default"]')).toHaveLength(1);
```

Here we have extended the test with further queries to find specific elements/components across our component's inner tree. In the case of our component, which is quite simple, the statements above are of the too contrived kind, but the main idea here is that with Enzyme we have a wide arrange of tools to look for specific parts of the HTML code the component is meant to render and test them accordingly.

## Triggering events and testing state changes

Now let's see if we can test how our component's state changes. Let us add the following test:
```diff
+  it('should change the state accordingly when the user modifies the values in the text fields', () => {
+    const text = 'some_text';
+    const event = { target: { value: text } };
+    const wrapper = shallow(<InputForm {...props} />);
+    wrapper.find('#field_A').simulate('change', event);
+    expect(wrapper.state('fieldA')).toBe(text);
+  });
```

In this case, we are simulating a `change` event, which represents the user typing something in the text field. We need to arrange some fake data for the event variable that the `change` event is expected to return. Then, we call the `.state()` method with the name of the property of the state we want to retrieve, and confirm that it has been changed to the value we have "virtually" typed. In this example we have only covered `field_A`, but the same applies for each of the other fields and the respective piece of state related to them.

Let us try now to do the reverse flow: force a change in the state and see if the values in the text field are modified accordingly
```diff
+  it('should change the values in the text fields if the state is somehow changed (note: this is not a real test)', () => {
+    const text = 'some_text';
+    const wrapper = shallow(<InputForm {...props} />);
+    wrapper.setState({ fieldA: text });
+    expect(wrapper.find('#field_A').prop('value')).toBe(text);
+  });
```

We can see how, effectively, the text we are enforcing on the state is propagate successfully to the value in the leaf component of our shallow-rendering. Now, it is worth noting here that it could be said that this 'test' is testing nothing at all, as we do not really have any means to change the state of our `InputForm` component other than calling the `change` event. Nonetheless, this helps us illustrate how we can manually force state changes and see if everything is working as intented, which can prove to be useful for more complicated components.

## Triggering events and testing props callback invocation, an introduction to mocking
In react, we usually work using one-way flow: we send data to child components through props. Then, if the child component wants to "tell" the father to do something,instead of sending data back using a two-way binding props, the data is propagated upwards by calling callback props. We are now going to set some tests to check that whenever we click on the buttons from `InputForm` component, the corresponding callback is called.
```diff
+  it('should call the corresponding props callback when clicking on the buttons', () => {
+    props.onButtonAClick = jest.fn();
+    props.onButtonBClick = jest.fn();
+    props.onButtonCClick = jest.fn();
+    const wrapper = shallow(<InputForm {...props} />);
+    wrapper.find(Button).at(0).simulate('click');
+    wrapper.find(Button).at(1).simulate('click');
+    wrapper.find(Button).at(2).simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledTimes(1);
+    expect(props.onButtonBClick).toHaveBeenCalledTimes(1);
+    expect(props.onButtonCClick).toHaveBeenCalledTimes(1);
+  });
```

In order to check that we have called the corresponding callbacks, we need to mock them. The most common way to mock a function in jest is to replace it with `jest.fn()`. This way we can later call matchers such as `toHaveBeenCalled` or `toHaveBeenCalledWith` to ensure that the calls are being made in response to whichever events we simulate. In this case, we have simulated 3 clicks, one on each button, and we assert that each callback should be therefore called once.

We will study mocks later more in-depth, but for now we can also add another test to check that the onClick handler is effectively sending back to the parent the corresponding piece of data (i.e. the contents of each text field, depending on which button is clicked). While that might as well be added to the test we have just coded straight-away, let's add a new test to cover this case.
```diff
+  it('should propagate upwards the values of field A when clicking on button A', () => {
+    const expectedResult = 'value_to_propagate';
+    const event = { target: { value: expectedResult } };
+    props.onButtonAClick = jest.fn();
+    const wrapper = shallow(<InputForm {...props} />);
+    wrapper.find('#field_A').simulate('change', event);
+    wrapper.find(Button).at(0).simulate('click');
+    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResult);
+  });
```

## Testing the component without shallow rendering
At the end of the day, React Components are just regular ES functions or classes (i.e. sugar-coated functions), and thus they can be tested in the same way any regular ES module can. Let's add a new method to our Component class
```diff
+  public doComplicatedStuff(text?: string) {
+    console.log('This method does a lof of complicated things');
+    this.props.onButtonAClick(text);
+    this.props.onButtonBClick(text);
+    this.props.onButtonCClick(text);
+    text && console.log(`Strange things are afoot: ${text}`);
+  }
```

We can test this method's behaviour without the need of actually shallow rendering the component if we desire to do so. In this case, since we cannot trigger the method by simulating user actions, we need to explicitly call the method (as if it were just a regular ES class and not a React Component). For example, using the following code excerpt
```diff
+  it('should call all the callbacks when doing complicated stuff', () => {
+    const text = 'So complex, much complication, wow';
+    props.onButtonAClick = jest.fn();
+    props.onButtonBClick = jest.fn();
+    props.onButtonCClick = jest.fn();
+    const component = new InputForm(props);
+    component.doComplicatedStuff(text);
+    expect(props.onButtonAClick).toHaveBeenCalledWith(text);
+    expect(props.onButtonBClick).toHaveBeenCalledWith(text);
+    expect(props.onButtonCClick).toHaveBeenCalledWith(text);
+  });
```

It is important to note that if this method were doing "React specific" things, so to speak, like, for example, changing the State by calling `setState()`, we should avoid testing it this way and instead we should be going back to shallow rendering. How could we call the method in this case? We can use the `instance` method of the shallow wrapper to get a reference to the actual component.
```diff
  it('should call all the callbacks when doing complicated stuff', () => {
    const text = 'So complex, much complication, wow';
    props.onButtonAClick = jest.fn();
    props.onButtonBClick = jest.fn();
    props.onButtonCClick = jest.fn();
-    const component = new InputForm(props);
+    const wrapper = shallow(<InputForm {...props} />);
+    const component = wrapper.instance() as InputForm;
    component.doComplicatedStuff(text);
    expect(props.onButtonAClick).toHaveBeenCalledWith(text);
    expect(props.onButtonBClick).toHaveBeenCalledWith(text);
    expect(props.onButtonCClick).toHaveBeenCalledWith(text);
  });
```

Finally, one issue we may stumble upon while working with Typescript is that we may want to test some of the private methods defined inside the class independently from the rest of the logic (for example, if we have a very complex method that produces a lot of different potential test cases). However, since the method is defined as `private`, our linter should not let us call it explicitly, and maybe calling it indirectly through other public methods makes the tests unnecessarily convoluted. Let's see how we can tackle this. First, let's add a private method to our component.
```diff
  public doComplicatedStuff(text?: string) {
    console.log('This method does a lof of complicated things');
    this.props.onButtonAClick(text);
    this.props.onButtonBClick(text);
    this.props.onButtonCClick(text);
    text && console.log(`Strange things are afoot: ${text}`);
+    this.testingMeCanBeFun(text);
  }

+  private testingMeCanBeFun = (text?: string) =>{
+    if (text == null || text.length > 1) {
+      console.log('Nothing to report');
+    }
+    switch(text) {
+      case 'A':
+        // Call some callbacks
+        this.props.onButtonAClick('A long time ago');
+        break;
+      case 'B':
+        // Call some more callbacks
+        this.props.onButtonAClick('A long time ago');
+        this.props.onButtonBClick('By the shore');
+        break;
+      case 'C':
+        // Call even more callbacks
+        this.props.onButtonAClick('A long time ago');
+        this.props.onButtonBClick('By the shore');
+        this.props.onButtonCClick('Close to Mordor');
+        break;
+      case 'D':
+        // And maybe some more?
+        this.props.onButtonAClick('A long time ago');
+        this.props.onButtonCClick('Close to Mordor');
+        this.props.onButtonCClick('Despite not being sure if Mordor has shores');
+        break;
+    }
+  };
```

We can test this method by calling `doComplicatedStuff` and try to cover the different cases from there, or we can try to circunvent the limitations enforced by Typescript in this regard. This is something that we should not be doing in our standard code, but for testing purposes, it can be justified. For example, one way we can skip the `private` access restriction is as follows:
```diff
+  it('should call the corresponding callbacks when sending a D to testingMeCanBeFun method', () => {
+    const text = 'D';
+    props.onButtonAClick = jest.fn();
+    props.onButtonBClick = jest.fn();
+    props.onButtonCClick = jest.fn();
+    const component = new InputForm(props);
+    (component as any).testingMeCanBeFun(text);
+    expect(props.onButtonAClick).toHaveBeenCalledWith('A long time ago');
+    expect(props.onButtonCClick).toHaveBeenCalledTimes(2);
+  });
```

Ideally, though, it is better to extract most of this complex functionality outside private functions, hoisting it outside the Component (using Currying if needed to provide props/state) so that it can be individually tested, refactored into utility modules, etc.