import React from 'react';
import { useLocation } from 'react-router-dom';

import useGetData from '../../hooks/useGetData';
import './Header.scss';
import { Form } from '..';

const DOTS = 9;

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home' || location.pathname === '/';
  const { data } = useGetData(1);

  return (
    <header className={isHome ? 'header' : 'header header--has-search'}>
      {isHome ? (
        <h1 className="header__title">
          Agile content <span className="header__subtitle">Frontend</span>
        </h1>
      ) : (
        <Form isHome={isHome} />
      )}
      <div className="header__container">
        <div className="header__menu">
          {[...Array(DOTS)].map((_, index) => (
            <div key={index} className="header__line"></div>
          ))}
        </div>
        <figure className="header__img-wrapper">
          <img src={data?.[0]?.image} alt="" className="header__img" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
