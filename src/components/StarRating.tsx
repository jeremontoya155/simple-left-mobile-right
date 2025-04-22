
import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ value = 5 }: { value?: number }) => (
  <div className="flex space-x-1">
    {[...Array(value)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
    ))}
  </div>
);

export default StarRating;
