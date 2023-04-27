import React from "react";
import "./VideoRow.css";
import { Avatar } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
function VideoRow({ views, channel, timestamp, subs, description, image,title,img }) {
  return (
    <div className="videoRow">
      <img src={image} alt=""/>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {views} • {timestamp}
        </p>
        <p className="videoRow__channel" style={{display:"flex",gap:"10px"}}>
          <Avatar src={img} />{" "}
          <h4>
            {channel}
            <CheckCircleOutlineOutlined style={{ fontSize: "16px",marginLeft:"5px" }} />
          </h4>
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
