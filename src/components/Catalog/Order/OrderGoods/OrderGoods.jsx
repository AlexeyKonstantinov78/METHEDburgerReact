import classNames from 'classnames';
import { Count } from '../Count/Count';
import style from './OrderGoods.module.css';
import { API_URI } from '../../../../const';

export const OrderGoods = ({ item }) => {  
  return (
    <li className={style.order__item}>
      <img
        className={style.order__image}
        src={`${API_URI}/${item.image}`}
        alt={item.title}
      />

      <div className={classNames(style.order__goods, style.goods)}>
        <h3 className={style.goods__title}>{item.title}</h3>

        <p className={style.goods__weight}>{item.weight}г</p>

        <p className={style.goods__price}>
          {item.price}
          <span className='currency'>&nbsp;₽</span>
        </p>
      </div>

      <Count count={item.count} id={item.id} />
    </li>
  );
};
