import React from "react";
import './videos.css';
import '../../App.css'
import Footer from "../footer";

const videos = [
  {src: "https://www.youtube.com/embed/videoseries?list=PL0g1ljWT16uBu3kQ7dOy4HIeb02v1k9Db"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
  // {src: "https://www.youtube.com/embed/65ffDfyAj5c"},
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
            {/*<iframe width="560" height="315"*/}
            {/*        src="https://www.youtube.com/embed/videoseries?list=PL0g1ljWT16uBu3kQ7dOy4HIeb02v1k9Db"*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*        allowFullScreen></iframe>*/}
            {
              videos.map((item) => (
                <div className="video_card">
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