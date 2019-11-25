import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import RouterProvider from 'routes/RouterProvider';

function App(): ReactElement {
  return <RouterProvider />;
}

ReactDOM.render(<App />, document.getElementById('app'));
