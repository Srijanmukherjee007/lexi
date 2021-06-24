import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import styles from "@styles/CountdownTimer.module.scss";

export default function CountdownTimer({
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
      // gameEndSound.play();
    }

    return () => {
      if (gameEndSound) {
        gameEndSound.pause();
      }
    };
  }, [startEndingSound]);

  return (
    <div className={styles.countdown_timer}>
      <div className={styles.countdown_timer__time}>
        <svg className={styles.svg_circle}>
          <circle r="2rem" cx="3.5rem" cy="3.5rem" />
        </svg>
        <Typography variant="h5">{time}</Typography>
      </div>
    </div>
  );
}
