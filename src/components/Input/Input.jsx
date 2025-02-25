import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './Input.scss';

const Input = ({ onSubmit, onChange, onDelete, value }) => {
  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit(event);
    }
  };

  return (
    <div className="input">
      <label htmlFor="search" className="input__text">
        Buscar
      </label>
      <figure className="input__search">
        <FontAwesomeIcon
          color="gray"
          icon={faSearch}
          aria-hidden="true"
          size="s"
        />
      </figure>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        id="search"
        name="search"
        className="input__field"
        onKeyDown={(event) => handleOnKeyDown(event)}
      />
      <button
        className="input__delete-button"
        onClick={onDelete}
        aria-label="delete"
      >
        <figure className="input__delete-wrapper">
          <FontAwesomeIcon
            color="gray"
            icon={faXmark}
            aria-hidden="true"
            size="m"
          />
        </figure>
      </button>
    </div>
  );
};

export default Input;
