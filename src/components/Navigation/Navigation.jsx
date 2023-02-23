import { Container } from '../Container/Container';
import style from './Navigation.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { useEffect } from 'react';
import { API_URI } from '../../const';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();  

  useEffect(
    () => {
      dispatch(categoryRequestAsync());
    }, []);
  
  return (
    <nav className={style.navigation}>
      <Container className={style.navigation__container}>
        <ul className={style.navigation__list}>
          {category.map((item, i) => 
            <li key={i} className={style.navigation__item}>
              <button
                className={classNames(
                  style.navigation__button,
                  activeCategory === i ? style.navigation__button_active : '')}                  
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }));
                }}
              >
                {item.rus}
              </button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
};
