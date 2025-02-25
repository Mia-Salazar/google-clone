import { useLocation } from 'react-router-dom';

import useGetData from '../../hooks/useGetData';
import { Card, NoResults, Skeleton } from '../../components';
import './Results.scss';

const Results = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get('search');
  const { data, isLoading, getTypes } = useGetData({
    count: 100,
    delay: 2000,
    query: searchTerm,
  });

  if (isLoading) return <Skeleton />;

  if (!searchTerm) return <NoResults types={getTypes()} />;

  if (data.length === 0)
    return <NoResults searchTerm={searchTerm} types={getTypes()} />;

  return (
    <section className="results">
      <ul>
        {data.map(({ id, url, title, description }) => (
          <Card key={id} url={url} title={title} description={description} />
        ))}
      </ul>
    </section>
  );
};

export default Results;
