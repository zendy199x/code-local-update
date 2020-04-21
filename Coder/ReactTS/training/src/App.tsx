// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import Reat, {Component} from 'react';
// import SomeComponent from './SomeComponent';

// class App extends Component {
//   render() {
//     return (
//       <SomeComponent someProp={'someString'} />
//     )
//   }
// }


// import React, { FC } from 'react';
// import SomeComponent from './SomeComponent';

// const App: FC = props => {
//   return {
//     <SomeComponent someProp={'someString'} />
//   }
// }


import React, { FC } from 'react';
import SomeComponent from './SomeComponent';

const App: FC = () => {
  const OnClickHandle = () => {

  }

  return <SomeComponent someProp={'SomeString' onSomeEvent={onClickHandler}}
}
