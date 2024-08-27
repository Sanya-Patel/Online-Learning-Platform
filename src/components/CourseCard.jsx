import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, id }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/course/${id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;
