import React from 'react';

const VideoSection = ({ videoId, title }) => {
  return (
    <section className="w-full bg-yellow-100 py-12 flex flex-col items-center">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
          {title}
        </h2>
      )}

      <div className="w-full max-w-5xl aspect-video px-4">
        <iframe
          className="w-full h-full rounded-lg shadow-lg border-4 border-white"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
