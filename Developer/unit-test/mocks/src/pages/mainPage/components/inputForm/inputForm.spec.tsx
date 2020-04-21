import * as React from 'react';
import { shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputForm, Props } from './inputForm';
import * as math from '../../../../lib/simpleMath';
import * as math2 from '../../../../lib/simpleMath2';
import * as complexMath from '../../../../lib/complexMath'

jest.mock('../../../../lib/simpleMath');
jest.mock('../../../../lib/simpleMath2');

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

  it('should render three text fields and three buttons', () => {
    const wrapper = shallow(<InputForm {...props} />);
    expect(wrapper.find(TextField).length).toBe(3);
    expect(wrapper.find(Button).length).toBe(4);
    expect(wrapper.find(TextField).at(0).prop('id')).toBe('field_A');
    expect(wrapper.find('#field_B').prop('id')).toBe('field_B');
    expect(wrapper.find('[color="default"]').text()).toBeTruthy();
    expect(wrapper.find(Button).filter('[color="default"]')).toHaveLength(1);
  });

  it('should change the state accordingly when the user modifies the values in the text fields', () => {
    const text = 'some_text';
    const event = { target: { value: text } };
    const wrapper = shallow(<InputForm {...props} />);
    wrapper.find('#field_A').simulate('change', event);
    expect(wrapper.state('fieldA')).toBe(text);
  });

  it('should change the values in the text fields if the state is somehow changed (note: this is not a real test)', () => {
    const text = 'some_text';
    const wrapper = shallow(<InputForm {...props} />);
    wrapper.setState({ fieldA: text });
    expect(wrapper.find('#field_A').prop('value')).toBe(text);
  });

  it('should call the corresponding props callback when clicking on the buttons', () => {
    props.onButtonAClick = jest.fn();
    props.onButtonBClick = jest.fn();
    props.onButtonCClick = jest.fn();
    const wrapper = shallow(<InputForm {...props} />);
    wrapper.find(Button).at(0).simulate('click');
    wrapper.find(Button).at(1).simulate('click');
    wrapper.find(Button).at(2).simulate('click');
    expect(props.onButtonAClick).toHaveBeenCalledTimes(1);
    expect(props.onButtonBClick).toHaveBeenCalledTimes(1);
    expect(props.onButtonCClick).toHaveBeenCalledTimes(1);
  });

  it('should propagate upwards the values of field A when clicking on button A', () => {
    const expectedResult = 'value_to_propagate';
    const event = { target: { value: expectedResult } };
    props.onButtonAClick = jest.fn();
    const wrapper = shallow(<InputForm {...props} />);
    wrapper.find('#field_A').simulate('change', event);
    wrapper.find(Button).at(0).simulate('click');
    expect(props.onButtonAClick).toHaveBeenCalledWith(expectedResult);
  });

  it('should call all the callbacks when doing complicated stuff', () => {
    const text = 'So complex, much complication, wow';
    props.onButtonAClick = jest.fn();
    props.onButtonBClick = jest.fn();
    props.onButtonCClick = jest.fn();
    const wrapper = shallow(<InputForm {...props} />);
    const component = wrapper.instance() as InputForm;
    component.doComplicatedStuff(text);
    expect(props.onButtonAClick).toHaveBeenCalledWith(text);
    expect(props.onButtonBClick).toHaveBeenCalledWith(text);
    expect(props.onButtonCClick).toHaveBeenCalledWith(text);
  });

  it('should call the corresponding callbacks when sending a D to testingMeCanBeFun method', () => {
    const text = 'D';
    props.onButtonAClick = jest.fn();
    props.onButtonBClick = jest.fn();
    props.onButtonCClick = jest.fn();
    const component = new InputForm(props);
    (component as any).testingMeCanBeFun(text);
    expect(props.onButtonAClick).toHaveBeenCalledWith('A long time ago');
    expect(props.onButtonCClick).toHaveBeenCalledTimes(2);
  });
});

describe('InputForm - Mocks', () => {
  const setFields = (wrapper: any, fieldA: string, fieldB: string, fieldC: string) => {
    wrapper.find('#field_A').simulate('change', { target: { value: fieldA } });
    wrapper.find('#field_B').simulate('change', { target: { value: fieldB } });
    wrapper.find('#field_C').simulate('change', { target: { value: fieldC } });
  }

  beforeEach(() => {
    props = {...baseProps}
  })

  it('should generate a new number using field A as the seed when clicking on the Math Away button', () => {
    const [fieldA, fieldB, fieldC] = ['2', '3', '4'];
    const expectedArgument = 2;
    props.generateNumberFromSeed = jest.fn();
    props.onButtonAClick = jest.fn();
    const wrapper = shallow(<InputForm {...props} />);
    setFields(wrapper, fieldA, fieldB, fieldC);
    wrapper.find('#math').simulate('click');
    expect(props.generateNumberFromSeed).toHaveBeenCalledWith(expectedArgument);
  });

  it('should propagate the result of "math away" by calling the on-click callback for button A', () => {
    (math.sum as jest.Mock).mockReturnValueOnce(8);
    (math.divide as jest.Mock).mockReturnValueOnce(2);
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
    expect(math.sum).toHaveBeenLastCalledWith(5, 3);
    expect(math.divide).toHaveBeenLastCalledWith(8, 4);
  });

  it('should propagate the result of "math away" as many times as it was clicked', () => {
    // Arrange
    const expectedSumCalls = [ [17, 3], [37, 3], [5, 3], [5, 3], [5, 3] ];
    const expectedDivideCalls = [ [20, 4], [40, 4], [8, 4], [8, 4], [8, 4] ];
    (math.sum as jest.Mock).mockReturnValueOnce(20);
    (math.sum as jest.Mock).mockReturnValueOnce(40);
    (math.sum as jest.Mock).mockReturnValue(8);
    (math.divide as jest.Mock).mockReturnValueOnce(5);
    (math.divide as jest.Mock).mockReturnValueOnce(10);
    (math.divide as jest.Mock).mockReturnValue(2);
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
    expect((math.sum as jest.Mock).mock.calls).toEqual(expectedSumCalls);
    expect((math.divide as jest.Mock).mock.calls).toEqual(expectedDivideCalls);
  });

  it('should be calling the default manual mocks defined in __mocks__ for the simpleMath2 module imported', () => {
    const x = math2.sum(3, 5);
    const y = math2.prod(2, 7);
    const z = math2.divide(1, 9);
    expect(x).toBe(`I'm mocked!! 3 + 5`);
    expect(y).toBe(`I'm mocked!! 2 * 7`);
    expect(z).toBe(`I'm mocked!! 1 / 9`);
  });

  afterEach(() => {
    (math.sum as jest.Mock).mockReset();
    (math.divide as jest.Mock).mockReset();
  });
});

describe('InputForm - Spy', () => {
  beforeEach(() => {
    props = { ...baseProps };
  });

  it('should call performComplexMath twice when calling doSomeComplexCalculations', () => {
    const mock = jest.spyOn(complexMath, 'performComplexMath');
    const component = new InputForm(props)
    component.doSomeComplexCalculations([1, 2, 3]);
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock.mock.calls).toEqual([[[1, 2, 3]],[[1, 4, 9]]]);
    mock.mockClear();
  });

  it('should call performComplexMath twice when calling doSomeComplexCalculations v2', () => {
    const mock = jest.spyOn(complexMath, 'performComplexMath');
    mock.mockImplementation(() => 1);
    const expectedResult = 2;
    const component = new InputForm(props)
    const result = component.doSomeComplexCalculations([1, 2, 3]);
    expect(result).toBe(expectedResult);
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock.mock.calls).toEqual([[[1, 2, 3]],[[1, 4, 9]]]);
    mock.mockRestore();
  });
});