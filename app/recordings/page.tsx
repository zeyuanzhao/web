import React from "react";
import Main from "../../components/Main";
import Video from "../../components/Video";

const Recordings = () => {
  return <Main title="Recordings">
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 justify-items-center">
      <Video src="https://www.youtube.com/embed/H_k0UrGZF8Y" width={560} height={315}></Video>
    </div>
  </Main>;
};

export default Recordings;