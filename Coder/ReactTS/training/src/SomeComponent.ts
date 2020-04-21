// import React, {Component} from 'react';

// interface Props = {
//   someProps: string;
//   someOtherProps?: number;
// }

// interface State = {
//   someState : string;
//   sometOtherState: number;
// }

// class SomeComponent extends Component(<Props, State) {
//   static defaultProps = {
//     someDefaultProps: 11
//   };

//   state = {
//     someState: '',
//     someOtherState: 0
//   };

//   render() {
//     const {someProp, someOtherProp} = this.props;
//     return(<></>)
//   }
// }

// import React, { FC } from 'react';

// interface Props = {
//   someProps = {
//     someProp: string;
//     someDefaultProp?: number;
//   }
// }

// const SomeComponent: FC<Props> = props => {
//   return (<></>)
// }

// SomeComponent.defaultProps = {
//   someDefaultProp: 11
// }


// inport React, { FC } from 'react';

// type Props = {
//   someprops: string;
//   onSomeEvent: () => void;
// }

// const SomeComponent: FC<Prop> = {{ someProp, onSomeEvent}} => {
//   return (
//     <>
//       <p>{someProp</p>
//       <button onClick={onSomeEvent}Click me for Some Event></button>
//     </>
//   )
// }


// function líten(pỏt: any) {
//   let _port = port;
//   if (typeof port === 'string') {
//     _port = parseInt(port, 10;)
//   }
//   server.listen(port);
// }


// function fn<T extends boolean>(x: T) T extends true ? string 


// type FlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';

// type Props = {
//   flexDirection: FlexDirection;
// }

// export const Flex: FC<Props> = props => {
//   return (
//     <div style={{díplay: 'flex', flexDirection: props.flexDirection}}>
//       {props.children()}
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <Flex>
//       <span>I am a flex child</span>
//     </Flex>
//   )
// }
