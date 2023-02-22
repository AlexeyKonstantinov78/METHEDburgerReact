import { Container } from '../Container/Container';
import style from './Catalog.module.css';
import { CatalogProduct } from './CatalogProduct/CatalogProduct';
import { Order } from './Order/Order';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={style.catalog}>
      <Container className={style.catalog__container}>
        <Order />

        <div className={style.catalog__wrapper}>
          <h2 className={style.catalog__title}>Бургеры</h2>

          <div className={style.catalog__wrap_list}>
            <ul className={style.catalog__list}>
              {goodsList.map(item => (
                <li className={style.catalog__item}>                  
                  <CatalogProduct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
