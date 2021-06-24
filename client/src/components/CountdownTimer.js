import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

export default function CountdownTimer({
  variant = "body1",
  timeCount = 10,
  onTimerInitialize = () => {},
  onTimerComplete = () => {},
}) {
  const [tickTimeout, setTickTimeout] = useState(null);
  const [gameEndSound, setGameEndSound] = useState(null);
  const [time, setTime] = useState(timeCount);
  const [startEndingSound, setStartEndingSound] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setGameEndSound(new Audio("/audio/endCountdown.mp3"));
  }, []);

  useEffect(() => {
    const timerEndpoints = {
      reset: () => {
        // reset timer
        clearTimeout(tickTimeout);
        setPaused(false);
        setTime(timeCount);
        setStartEndingSound(false);
      },

      pause: () => {
        // pause timer
        clearTimeout(tickTimeout);
        setPaused(true);
      },
    };

    onTimerInitialize(timerEndpoints);
  }, []);

  function tick() {
    clearTimeout(tickTimeout);
    setTickTimeout(
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    );
  }

  useEffect(() => {
    if (paused) {
      return;
    }

    if (time <= 0) {
      setStartEndingSound(false);
      clearTimeout(tickTimeout);
      onTimerComplete();
      return;
    }

    if (!startEndingSound && time <= 4) {
      setStartEndingSound(true);
    }

    tick();
  }, [time, paused]);

  useEffect(() => {
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
    <div style={{ position: "absolute" }}>
      <Typography variant={variant}>{time}</Typography>
    </div>
  );
}
