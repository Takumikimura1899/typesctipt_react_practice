import React from 'react';
import './App.css';

interface AppProps {
  message?: string;
}

// こちらの場合宣言した関数コンポーネント自体にアノテーションがかかっているため、
// defaultPropsに変な物が混じっていると弾かれる
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div className='App'>{message}</div>;
};
App.defaultProps = {
  message: 'Hello,defaultProps!',
  // description: 'This is App component.',
};

// こちらの場合、propsとして渡ってくるmessage自体にはアノテーションがかかっているが、
// 関数コンポーネント自体にはかかっていないため、defaultPropsに変なものが混じっていても弾かれない。
// const App = ({ message }: { message: string }) => {
//   return <div className=''>{message}</div>;
// };
// App.defaultProps = {
//   message: 'Hello,defaultProps!',
//   description: 'This is App component.',
// };

export default App;
