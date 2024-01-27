import React, { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const startContainerStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

interface maxRatingProp {
  maxRating: number;
}

const StarRating = ({ maxRating = 5 }: maxRatingProp) => {
  const [rating, setRating] = useState(1);

  const handleRating = (rating: React.SetStateAction<number>) => {
    setRating(rating);
  };

  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
};

export default StarRating;
