import * as React from 'react';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      {props.children}
    </div>
  );
};
