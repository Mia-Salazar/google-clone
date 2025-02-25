import './Card.scss';

const Card = ({ id, url, title, description, onClick }) => (
  <li className="card">
    <button className="card__container" onClick={() => onClick(id)}>
      <span className="card__url">{url}</span>
      <span className="card__title">{title}</span>
      <span className="card__description">{description}</span>
    </button>
  </li>
);

export default Card;
