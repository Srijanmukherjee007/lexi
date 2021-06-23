import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

export default function CountdownTimer({
  variant = "body1",
  children,
  timeLimit = 10,
}) {
  const timeCount = timeLimit;
  let tickTimeout;
  const [gameEndSound, setGameEndSound] = useState(null);
  const [time, setTime] = useState(timeCount);
  const [loop, setLoop] = useState();
  const [startEndingSound, setStartEndingSound] = useState(false);
  useEffect(() => {
    setGameEndSound(
      new Audio(
        "https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/audioblocks-game-start-countdown_HWHWyNd7FDU_NWM.mp3"
      )
    );
  }, []);

  function tick() {
    clearTimeout(tickTimeout);
    tickTimeout = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }

  useEffect(() => {
    if (time <= 0) {
      clearTimeout(tickTimeout);
      return;
    }

    if (!startEndingSound && time <= 4) {
      setStartEndingSound(true);
    }
    tick();
  }, [time]);

  useEffect(() => {
    console.log(gameEndSound);
    if (gameEndSound !== null) {
      gameEndSound.play();
    }

    return () => {
      if (gameEndSound) {
        gameEndSound.pause();
      }
    };
  }, [startEndingSound]);

  return (
    <div>
      <Typography variant={variant}>{time}</Typography>
      {children}
    </div>
  );
}
