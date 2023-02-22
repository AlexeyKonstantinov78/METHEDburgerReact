import { Container } from '../Container/Container';
import style from './Navigation.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

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
                style={{ backgroundImage: `url(${item.image})` }}
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
