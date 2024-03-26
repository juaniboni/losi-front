import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Video.css";
import { Link } from "react-router-dom";

const Video = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: "AIzaSyCeIULef2Q_Qcpys1sTI83D6VBC-yb_eaY",
              channelId: "UC_mWwfR4quoI36yc5NGvWIg",
              part: "snippet",
              type: "video",
              q: "LOSI - 1 Año",
            },
          }
        );
        console.log(response.data);
        if (response.data.items.length > 0) {
          // Set the data of the first video in the response
          setVideoData(response.data.items[0]);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="center-container">
      <div className="logo">
        <img
          src="./losiFlor.png"
          alt="logo"
          style={{ width: "120px", height: "auto" }}
        />
      </div>
      <div className="video-container">
        {videoData && (
          <iframe
            width="80%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoData.id.videoId}?si=tfG9HSGVrWjBbJZf`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="button-container">
        <Link to="/home" className="overlay-link">
          <h1>ENTER</h1>
        </Link>
      </div>
    </div>
  );
};

export default Video;
