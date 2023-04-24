import React from 'react';

const Card = (props) => {
  const { children, title, description } = props;

  return (
    <div className="card" style={{ "width": "18rem" }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
};

export default Card;
