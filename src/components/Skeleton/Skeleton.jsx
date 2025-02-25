import './Skeleton.scss';

const SKELETON_NUMBER = 10;

const Skeleton = () => (
  <ul className="skeleton" aria-label="cargando" aria-busy="true">
    {[...Array(SKELETON_NUMBER)].map((_, index) => (
      <li key={index} className="skeleton__line">
        <span className="skeleton__title"></span>
        <span className="skeleton__subtitle"></span>
        <span className="skeleton__description"></span>
      </li>
    ))}
  </ul>
);

export default Skeleton;
