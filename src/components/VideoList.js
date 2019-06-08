import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
  const { videos, onVideoSelect } = props;

  return (
    <div className="ui relaxed divided list">
      {videos.map(video => (
        <VideoItem
          onVideoSelect={onVideoSelect}
          video={video}
          key={video.id.Id}
        />
      ))}
    </div>
  );
};

export default VideoList;
