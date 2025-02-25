import './Button.scss';

const Input = ({ isDisabled }) => (
  <button className="button" disabled={isDisabled}>
    Buscar
  </button>
);

export default Input;
