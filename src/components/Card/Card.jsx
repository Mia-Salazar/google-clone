import './Card.scss';

const Card = ({ url, title, description }) => (
  <li className="card">
    <a href={url} className="card__url">
      {url}
    </a>
    <span className="card__title">{title}</span>
    <span className="card__description">{description}</span>
  </li>
);

export default Card;
