import './Button.scss';

const Input = ({ onClick, isDisbaled }) => (
  <button className="button" disabled={isDisbaled} onClick={onClick}>
    Buscar
  </button>
);

export default Input;
