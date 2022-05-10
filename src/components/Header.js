import React from "react";
import video from "../data/video";

function Header() {
  return (
    <>
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
    </>
  );
}

export default Header;
