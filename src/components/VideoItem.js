import React from 'react';
import './VideoItem.css';

const VideoItem = props => {
  const { video, onVideoSelect } = props;
  return (
    <div onClick={onVideoSelect.bind(this, video)} className="video-item item">
      {' '}
      <img
        className="ui rounded image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
