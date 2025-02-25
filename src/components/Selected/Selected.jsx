import React, { useEffect, useRef } from 'react';

import './Selected.scss';

const Selected = React.forwardRef(
  ({ url, title, description, image, onClose }, ref) => {
    const selectedRef = ref || useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          selectedRef.current &&
          !selectedRef.current.contains(event.target)
        ) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <article className="selected">
        <div className="selected__container" ref={selectedRef}>
          <figure className="selected__img-wrapper">
            <img src={image} alt="" className="selected__img" />
          </figure>
          <p className="selected__url">{url}</p>
          <p className="selected__title">{title}</p>
          <p className="selected__description">{description}</p>
        </div>
      </article>
    );
  }
);

export default Selected;
