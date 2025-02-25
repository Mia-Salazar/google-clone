import './Card.scss';

const Card = ({ url, title, description }) => (
  <li className="card">
    <span className="card__title">{url}</span>
    <span className="card__subtitle">{title}</span>
    <span className="card__description">{description}</span>
  </li>
);

export default Card;
