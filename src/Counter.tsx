import { useEffect, useRef, useState } from 'react';

// おまけ
// const array: Array<number> = [1, 2, 3];
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 11;
// readonlyArray[0] = 11;

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

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  // ノンヌルアサーションオペレーターという
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    console.log('focus in!');
    ref.current.focus();

    // オプショナルチェイニング
    // ref.current?.focus();

    // nullチェック
    // const current = ref.current;
    // if (current != null) current.focus();
  };

  return (
    <>
      <div>count:{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times</div>
      <input ref={ref} type='text' />
      {/* ボタンを押すとinputにフォーカスが移る */}
      <button onClick={focusInput}>Click Me</button>
    </>
  );
};

export default Counter;
