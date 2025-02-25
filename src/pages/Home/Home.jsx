import { Button, Footer, Input } from '../../components';

import Logo from '../../assets/logo.png';
import './Home.scss';
import { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState('');

  const handleChange = (value) => {
    setSearch(value);
  };

  const handleDelete = () => {
    setSearch('');
  };

  return (
    <section className="home">
      <figure className="home__img-wrapper">
        <img alt="" src={Logo} />
      </figure>
      <form className="home__wrapper">
        <Input value={search} onChange={handleChange} onDelete={handleDelete} />
        <Button />
      </form>
      <Footer />
    </section>
  );
};

export default Home;
