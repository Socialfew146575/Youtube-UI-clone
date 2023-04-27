import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { ExpandMoreOutlined, HistoryOutlined, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr></hr>

      <SidebarRow  title="Library" Icon={VideoLibrary} />
      <SidebarRow title="History" Icon={HistoryOutlined} />
      <SidebarRow title="Your videos" Icon={OndemandVideo} />
      <SidebarRow  title="Watch Later" Icon={WatchLater} />
      <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlined} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlined} />
      <hr></hr>
    </div>
  );
}

export default Sidebar;
