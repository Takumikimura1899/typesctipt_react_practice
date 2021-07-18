import React from 'react';
import './App.css';

interface AppProps {
  message: string;
}

function App({ message }: AppProps) {
  return <div className='App'>{message}</div>;
}

export default App;
