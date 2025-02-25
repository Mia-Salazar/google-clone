import './Button.scss';

const Input = ({ isDisbaled }) => (
  <button className="button" disabled={isDisbaled}>
    Buscar
  </button>
);

export default Input;
