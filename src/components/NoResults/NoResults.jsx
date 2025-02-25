import './NoResults.scss';

const NoResults = ({ types, searchTerm }) => (
  <section className="no-results">
    {searchTerm && (
      <p>
        No results found for:{' '}
        <span className="no-results__bold">{searchTerm}</span>
      </p>
    )}
    <p>
      Try looking for:{' '}
      {types.map((word, index) => (
        <span key={index} className="no-results__bold">
          {word}
          {', '}
        </span>
      ))}
    </p>
  </section>
);

export default NoResults;
