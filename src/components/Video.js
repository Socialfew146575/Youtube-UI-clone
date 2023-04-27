import React from "react";
import { Avatar } from "@mui/material";
import "./Video.css"
function Video({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p className="videoCard__channel">{channel}</p>
          <p className="videoCard__details">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
