import React from 'react'

const Video = (props) => {
 const videoUrl = props.videoObj.url.replace("watch?v=", "embed/");
  return (
   <div className="video-container">
        {/* embedded video */}
        <div className="video">
          <iframe
            width="853"
            height="480"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        {/* delete button */}
        <div className="delete-button-container">
          <button onClick={props.removeVideo} className="delete-button">
            Remove
          </button>
        </div>
        
      </div>
   
  )
}

export default Video