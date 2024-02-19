import React from "react";
import Main from "../../components/Main";
import Video from "../../components/Video";

const Recordings = () => {
  return (
    <Main title="Recordings">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 justify-items-center">
        <Video
          src="https://www.youtube.com/embed/H_k0UrGZF8Y"
          width={560}
          height={315}
        ></Video>
        <Video
          src="https://www.youtube.com/embed/9bvil3zuHy8"
          width={560}
          height={315}
        ></Video>
      </div>
      <p className="font-bold mt-4">
        🚧 This page is under construction. 🚧 I'll be adding more recordings later!
      </p>
    </Main>
  );
};

export default Recordings;
