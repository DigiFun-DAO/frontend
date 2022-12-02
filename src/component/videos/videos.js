import React from "react";
import './videos.css';
import '../../App.css'
import Footer from "../footer";

const videos = [
  {src: "https://www.youtube.com/embed/videoseries?list=PLxeKnzDa2fwEHSksjuWKK4rJwlwxGZ7z7", title: "Wearable Description"},
  {src: "https://www.youtube.com/embed/videoseries?list=PLxeKnzDa2fwEVfEzwc7TpkHcNX4x0i4oi", title: "Events"},
  {src: "https://www.youtube.com/embed/videoseries?list=PLxeKnzDa2fwH_i90BaTZQFBZQ4jUpGW6U", title: "Wearable Products"},
  {src: "https://www.youtube.com/embed/videoseries?list=PLxeKnzDa2fwFXbMzcLVmBjnU8m6fLze8q", title: "Decentraland Classes"},
]

class Videos extends React.Component {
  render() {
    return (
      <div className="video_content_frame">
        {/*<Header/>*/}
        <div className="video_content">
          <div className="video_content_words">
            <div className="video_content_words_title">Videos</div>
          </div>
          <div className="video_card_frame">
            {
              videos.map((item) => (
                <div className="video_card">
                  <div className="video_subtitle">{item.title}</div>
                  <iframe width="100%" height="100%" src={item.src}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen>
                  </iframe>
                </div>
              ))
            }
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Videos;