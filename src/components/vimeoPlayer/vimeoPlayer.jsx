import React, { useEffect, useRef } from "react";
import Vimeo from "@vimeo/player";

const VimeoPlayer = () => {
  const playerRef = useRef(null);

  useEffect((play) => {
    const player = new Vimeo(playerRef.current, {
      url: "https://vimeo.com/824804225",
      autoplay: play,
    });

    return () => {
      player.destroy();
    };
  }, []);

  return <div ref={playerRef}></div>;
};

export default VimeoPlayer;
