import * as React from 'react';
import { shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

  it('should render three text fields and three buttons', () => {
    const wrapper = shallow(<InputForm {...props} />);
    expect(wrapper.find(TextField).length).toBe(3);
    expect(wrapper.find(Button).length).toBe(3);
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