import style from './CatalogProduct.module.css';

export const CatalogProduct = (props) => {
  return (
    <article className={style.product}>
      <img
        src='../../assets/img/photo-5.jpg'
        alt={props.title}
        className={style.product__image}
      />

      <p className={style.product__price}>
        689<span className={style.currency}>₽</span>
      </p>

      <h3 className={style.product__title}>
        <button className={style.product__detail}>{props.title}</button>
      </h3>

      <p className={style.product__weight}>520г</p>

      <button className={style.product__add} type='button'>
        Добавить
      </button>
    </article>
  );
};
