import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Media.css";
import { Link } from "react-router-dom";

const Video = () => {
  const [videoData, setVideoData] = useState(null);
  const [videoData2, setVideoData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key:"AIzaSyCeIULef2Q_Qcpys1sTI83D6VBC-yb_eaY",
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
          setVideoData2(response.data.items[1]);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="center-media-container">
      <div className="media-container">
        <p>LOSI II</p>
        {videoData2 && (
          <iframe
            width="80%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoData2.id.videoId}?si=tfG9HSGVrWjBbJZf`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="media-container">
        <p>LOSI I</p>
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
    </div>
  );
};

export default Video;
