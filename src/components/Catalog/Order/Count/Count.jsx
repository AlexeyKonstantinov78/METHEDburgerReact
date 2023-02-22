import { useState } from 'react';
import style from './Count.module.css';

export const Count = (props) => {
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className={style.count}>
      <button
        className={style.count__minus}
        onClick={removeCount}
        disabled={count === 1}>
        -
      </button>
      <p className={style.count__amount}>{count}</p>
      <button className={style.count__plus} onClick={addCount}>
        +
      </button>
    </div>
  );
};
