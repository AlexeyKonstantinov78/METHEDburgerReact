import classNames from 'classnames';
import { Count } from '../Count/Count';
import style from './OrderGoods.module.css';

export const OrderGoods = ({ item }) => {
  return (
    <li className={style.order__item}>
      <img
        className={style.order__image}
        src='img/burger_1.jpg'
        alt={item}
      />

      <div className={classNames(style.order__goods, style.goods)}>
        <h3 className={style.goods__title}>{item}</h3>

        <p className={style.goods__weight}>512г</p>

        <p className={style.goods__price}>
          1279
          <span className='currency'>₽</span>
        </p>
      </div>

      <Count count={1} />
    </li>
  );
};
