import React from 'react';
import CounterWithReducer from './CounterWithReducer';
import './App.css';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
      <div className='App'>{message}</div>
      <CounterWithReducer />
    </>
  );
};
App.defaultProps = {
  message: 'Hello,defaultProps!',
};

export default App;
