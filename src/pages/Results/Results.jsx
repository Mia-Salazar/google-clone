import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import useGetData from '../../hooks/useGetData';
import { Card, NoResults, Selected, Skeleton } from '../../components';

import './Results.scss';

const Results = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get('search');
  const selectedRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data, isLoading, getTypes } = useGetData({
    count: 100,
    delay: 500,
    query: searchTerm,
  });

  console.log(searchTerm, 'searchTerm');

  const handleSelectSearch = (id) => {
    const selectedAnimal = data.find((element) => element.id === id);
    setSelected(selectedAnimal);
  };

  const handleCloseModal = () => {
    if (windowWidth < 991) setSelected();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) return <Skeleton />;

  if (!searchTerm) return <NoResults types={getTypes()} />;

  if (data.length === 0)
    return <NoResults searchTerm={searchTerm} types={getTypes()} />;

  return (
    <section className="results">
      <ul className="results__list">
        {data.map(({ id, url, title, description }) => (
          <Card
            key={id}
            id={id}
            url={url}
            title={title}
            description={description}
            onClick={handleSelectSearch}
          />
        ))}
      </ul>
      {selected && (
        <Selected
          url={selected.url}
          title={selected.title}
          description={selected.description}
          image={selected.image}
          ref={selectedRef}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Results;
