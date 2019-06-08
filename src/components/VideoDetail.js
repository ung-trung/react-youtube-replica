import React from 'react';

const VideoDetail = props => {
  const { video } = props;

  return (
    <div>
      {' '}
      {video ? (
        <div>
          <div className="ui embed">
            <iframe
              title="video player"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            />
          </div>
          <div className="ui segment">
            {' '}
            <h4 className="ui header">{video.snippet.title}</h4>
            <p className="">{video.snippet.description}</p>
          </div>
        </div>
      ) : null}{' '}
    </div>
  );
};

export default VideoDetail;
