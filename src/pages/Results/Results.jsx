import { useParams } from 'react-router-dom';

const Results = () => {
  const { text } = useParams();

  return <section className="results">results</section>;
};

export default Results;
