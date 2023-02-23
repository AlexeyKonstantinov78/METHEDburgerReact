import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRequestAsync } from '../../store/product/productSlice';
import { Container } from '../Container/Container';
import style from './Catalog.module.css';
import { CatalogProduct } from './CatalogProduct/CatalogProduct';
import { Order } from './Order/Order';

export const Catalog = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { category, activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.catalog__container}>
        <Order />

        <div className={style.catalog__wrapper}>{
          category.length ? 
          (<>
            <h2 className={style.catalog__title}>{category[activeCategory]?.rus}</h2>

            <div className={style.catalog__wrap_list}>
              <ul className={style.catalog__list}>
              {products.length ? 
                products.map(item => (
                  <li key={item.id} className={style.catalog__item}>                  
                    <CatalogProduct item={item} />
                  </li>
                )) :
                'К сожалению товаров данной категории нет'
              }
              </ul>
            </div>
          </>) :
          ''
        }
        </div>
      </Container>
    </section>
  );
};
