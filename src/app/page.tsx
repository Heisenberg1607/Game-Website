"use client";

import Image from "next/image";
// import YouTube from "react-youtube"
// import VideoBackground from "./VideoBackground/VideoBackground";
import Navbar from "./Navbar/page";

export default function Home() {

 

  
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <Navbar />
        <div className="container">
          
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/assets/VideoBG.mp4" type="video/mp4"/>
        </video>
        
      </div>
        <div className="content-hero">
          <h1 className="hello">Riders Republic</h1>
          <button className="btn btn-border-4">Play Free</button>
      </div>

        
      </div>
      
    </>
  );
}
