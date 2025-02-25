import { Button, Input } from '..';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../assets/logo.png';
import './Form.scss';

const Form = ({ isHome }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleChange = (value) => {
    setSearch(value);
  };

  const handleDelete = () => {
    setSearch('');
  };

  const handleSubmit = (event) => {
    console.log(search);
    event.preventDefault();
    navigate(`/results?${encodeURIComponent(search)}`);
  };

  return (
    <div className={isHome ? 'form' : 'form form--not-home'}>
      <figure className="form__img-wrapper">
        <img alt="" src={Logo} className="form__img" />
      </figure>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <Input
          value={search}
          onChange={handleChange}
          onDelete={handleDelete}
          onSubmit={handleSubmit}
        />
        {isHome && <Button isDisabled={search === ''} />}
      </form>
    </div>
  );
};

export default Form;
