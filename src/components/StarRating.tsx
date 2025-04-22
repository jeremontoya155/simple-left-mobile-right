
import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ value = 5, size = 20 }: { value?: number, size?: number }) => (
  <div className="flex space-x-1">
    {[...Array(value)].map((_, i) => (
      <Star key={i} className={`w-${size/4} h-${size/4} text-yellow-400 fill-yellow-400`} />
    ))}
  </div>
);

export default StarRating;
