import { useState } from 'react';

// propsを受け取ってないので、{}にしておく
const Counter: React.FC<{}> = () => {
  // any型で指定してある
  const initialValue: any = 0;
  // useStateの初期値はnumber型だと変換出来る
  const [count, setCount] = useState<number>(initialValue);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  const increment = () => {
    //   コールバックでの書き方 number型が指定される
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    //   慣れた書き方 こちらもnumber型が指定される
    setCount(count - 1);
  };

  return (
    <>
      <div>count:{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

export default Counter;
