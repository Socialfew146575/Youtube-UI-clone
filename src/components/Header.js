import React from "react";
import "./Header.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import image from "../images/youtube-logo-9.png";
import profile from "../images/pp.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <MenuRoundedIcon className="header__menuIcon" />

        
            <img className="header__logo" src={image} alt="" />
        
        </Link>
      </div>

      <div className="header__input">
        {" "}
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <span className="search__icon">
            <SearchRoundedIcon className="header__inputButton" />
          </span>
        </Link>
      </div>
      <div className="header__right">
        <span className="createVideo__icon">
          {" "}
          <VideoCallIcon className="header__icon " />
        </span>

        <span className="apps__icon">
          <AppsIcon className="header__icon " />
        </span>
        <span className=" notifications__icon">
          {" "}
          <NotificationsIcon className="header__icon" />
        </span>
        <Avatar alt="Arun Lohani" src={profile} className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
