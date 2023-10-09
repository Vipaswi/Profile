import React from 'react'

const Stars = (props: object) => {
  const fullStars = Math.floor(props.value);
  const hasHalfStar = props.value % 1 !== 0;

  return (
    <div className="ratings">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="ratings__star ratings__star--full"></span>
      ))}
      {hasHalfStar && (
        <span className="ratings__star ratings__star--half"></span>
      )}
      {[...Array(5 - Math.ceil(props.value))].map((_, index) => (
        <span key={`empty-${index}`} className="ratings__star ratings__star--empty"></span>
      ))}
    </div>
  );
};

export default Stars