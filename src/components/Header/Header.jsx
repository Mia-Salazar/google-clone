import React from 'react';

import useGetData from '../../hooks/useGetData';
import './Header.scss';

const DOTS = 9;

const Header = () => {
  const data = useGetData(1);
  const { image } = data[0];

  return (
    <header className="header">
      <h1 className="header__title">
        Agile content <span className="header__subtitle">Frontend</span>
      </h1>
      <div className="header__container">
        <div className="header__menu">
          {[...Array(DOTS)].map((_, index) => (
            <div key={index} className="header__line"></div>
          ))}
        </div>
        <figure className="header__img-wrapper">
          <img src={image} alt="" className="header__img" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
