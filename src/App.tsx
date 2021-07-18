import React from 'react';
import Counter from './Counter';
import './App.css';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
      <div className='App'>{message}</div>
      <Counter />
    </>
  );
};
App.defaultProps = {
  message: 'Hello,defaultProps!',
};

export default App;
