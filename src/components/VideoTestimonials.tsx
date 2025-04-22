
import React from "react";

const videos = [
  { src: "https://www.youtube.com/embed/DXUAyRRkI6k", name: "Cliente 1" },
  { src: "https://www.youtube.com/embed/sBws8MSXN7A", name: "Cliente 2" },
  { src: "https://www.youtube.com/embed/ysz5S6PUM-U", name: "Cliente 3" },
];

const VideoTestimonials = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {videos.map((video, i) => (
      <div key={i} className="rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
        <iframe
          src={video.src}
          title={video.name}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-48 md:h-64"
        />
      </div>
    ))}
  </div>
);

export default VideoTestimonials;
