import React from 'react';
import './ConceptCard.css';
import { Link } from 'react-router-dom';

const ConceptCard = ({ topic }) => {
  return (
    <Link to={`/concept/${topic.id}`} className="card-link">
      <div className="card">
        <img src={topic.image} alt={topic.title} className="card-image" />
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
      </div>
    </Link>
  );
};

export default ConceptCard;

