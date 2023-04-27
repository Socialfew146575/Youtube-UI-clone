import React from "react";
import "./RecommendedVideos.css";
import Video from "./Video";
function RecommendedVideo() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <Video
          title={"Become a Web Developer in 1 hour..."}
          views={"2.3M Views"}
          timestamp={"3 days ago"}
          channelImage={
            "https://images.pexels.com/photos/221181/pexels-photo-221181.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
          image={
            "https://images.pexels.com/photos/14553713/pexels-photo-14553713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          channel={"CodingAddict"}
        />
        <Video
          title={"How to make your Day PRODUCTIVE ??"}
          views={"100 Views"}
          timestamp={"1 seconds ago"}
          channelImage={
            "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          image={
            "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
          channel={"Inspiration Speaker"}
        />
        <Video
          title={"How Social Media affects you?"}
          views={"3.3M Views"}
          timestamp={"13 days ago"}
          channelImage={
            "https://images.pexels.com/photos/4974907/pexels-photo-4974907.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          image={
            "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
          channel={"TechSpark"}
        />
        <Video
          title={"How to make Omellete for Breakfast??"}
          views={"9.3M Views"}
          timestamp={"1 year ago"}
          channelImage={
            "https://images.pexels.com/photos/2343475/pexels-photo-2343475.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          image={
            "https://images.pexels.com/photos/7669481/pexels-photo-7669481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          channel={"MasterChef"}
        />
        <Video
          title={"Monday Podcast"}
          views={"40K Views"}
          timestamp={"2 months ago"}
          channelImage={
            "https://images.pexels.com/photos/1181288/pexels-photo-1181288.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          image={
            "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          channel={"Andrew"}
        />
        <Video
          title={"Travelling to the World's End.."}
          views={"1M Views"}
          timestamp={"2 weeks ago"}
          channelImage={
            "https://images.pexels.com/photos/3414792/pexels-photo-3414792.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          image={
            "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          channel={"World Traveller"}
        />
        <Video
          title={"Halloween Prank"}
          views={"3.1M Views"}
          timestamp={"7 days ago"}
          channelImage={
            "https://images.pexels.com/photos/221181/pexels-photo-221181.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
          image={
            "https://images.pexels.com/photos/5634666/pexels-photo-5634666.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          channel={"Prankster"}
        />
        <Video
          title={"Sunday  Vlog "}
          views={"12.6M Views"}
          timestamp={"59 seconds ago"}
          channelImage={
            "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          image={
            "https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          channel={"Michael R"}
        />
        <Video
          title={"Flowers - by Miley Cyrus (easy lyrics)"}
          views={"4.7M Views"}
          timestamp={"10 days ago"}
          channelImage={
            "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          image={
            "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          channel={"Sionatic"}
        />
      </div>
    </div>
  );
}

export default RecommendedVideo;
