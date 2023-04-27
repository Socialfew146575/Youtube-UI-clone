import React from 'react'
import { TuneOutlined } from '@mui/icons-material'
import "./SearchPage.css"
import logo from "../images/channel-logo.webp"
import VideoRow from "./VideoRow"
import ChannelRow from "./ChannelRow"
import img from "../images/video-img.webp"
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined className="filter__icon" />
        <h2>Filters</h2>
      </div>
      <hr />
      <ChannelRow
        image={logo}
        channel={"codingAddict"}
        verified
        subs={"60k"}
        noOfVideos={23}
        description={`Hi! I’m Arun Lohani, a professional internet person.

Like and subscribe to join us in our quest for Coding domination.

INTERNET HIGH FIVE`}
subscribed
      />
     
      <hr />
      <VideoRow
        title={"Build and Deploy a Youtube Clone using React..."}
        image={
          "https://images.pexels.com/photos/14553713/pexels-photo-14553713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        channel={"codingAddict"}
        views={"800K"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"1 hour ago"}
        img={logo}
      />{" "}
      <VideoRow
        title={"Build and Deploy a Instagram Clone using React../"}
        image={
          "https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        channel={"codingAddict"}
        views={"2.3M"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"8 hours ago"}
        img={logo}
      />{" "}
      <VideoRow
        title={"Build and Deploy a Spotify Clone using React../"}
        image={
          "https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        channel={"codingAddict"}
        views={"1M"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"14 hours ago"}
        img={logo}
      />{" "}
      <VideoRow
        title={"Build and Deploy a Facebook Clone using React../"}
        image={img}
        channel={"codingAddict"}
        views={"80K"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"1 week ago"}
        img={logo}
      />{" "}
      <VideoRow
        title={"Build and Deploy a Tinder Clone using React../"}
        image={
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        }
        channel={"codingAddict"}
        views={"5M"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"4 weeks ago"}
        img={logo}
      />{" "}
      <VideoRow
        title={"Build and Deploy a Airbnb Clone using React../"}
        image={
          "https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        channel={"codingAddict"}
        views={"10M"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"1 month ago"}
        img={logo}
      />{" "}
      <VideoRow
        title={"Build and Deploy a Amazon Clone using React../"}
        image={
          "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        channel={"codingAddict"}
        views={"1.7M"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"2 years ago"}
        img={logo}
      />{" "}
      <VideoRow
        title={"Build and Deploy a Flipkart Clone using React../"}
        image={
          "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        channel={"codingAddict"}
        views={"4.9M"}
        subs={"60K"}
        description={"Do you want FREE one hour training... check this out"}
        timestamp={"2 years ago"}
        img={logo}
      />
    </div>
  );
}

export default SearchPage
