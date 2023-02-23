import style from './CatalogProduct.module.css';
import { API_URI } from '../../../const';

export const CatalogProduct = ({ item }) => {
  return (
    <article className={style.product}>
      <img
        src={`${API_URI}/${item.image}`}
        alt={item.title}
        className={style.product__image}
      />

      <p className={style.product__price}>
        {item.price}<span className={style.currency}>₽</span>
      </p>

      <h3 className={style.product__title}>
        <button className={style.product__detail}>{item.title}</button>
      </h3>

      <p className={style.product__weight}>{item.weight}г</p>

      <button className={style.product__add} type='button'>
        Добавить
      </button>
    </article>
  );
};
