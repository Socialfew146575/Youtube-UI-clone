import React, { useState } from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  description,
  noOfVideos,
  subscribed
}) {
  const [isSubscribed,setIsSubscribed]=useState(false)

  const handleClick=(e)=>{

    e.preventDefault();
    setIsSubscribed(prevState=> !prevState)


  }

  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}{" "}
          {verified && (
            <CheckCircleOutlineOutlined style={{ fontSize: "16px" }} />
          )}
        </h4>
        <p>
          @{channel} • {subs} subscribers
        </p>
        <p>{noOfVideos} videos</p>
        <p>{description}</p>
      </div>
      <div className="subscribeBtn__container">

        {isSubscribed?
        <button className="subscribe__btn subscribed" onClick={handleClick}>
          <NotificationsNoneIcon/> Subscribed
        </button>  
        :
        <button className="subscribe__btn" onClick={handleClick}>
          Subscribe
        </button>
      }

      </div>
    </div>
  );
}

export default ChannelRow;
