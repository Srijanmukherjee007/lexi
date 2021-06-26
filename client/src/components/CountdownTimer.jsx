import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import styles from "@styles/CountdownTimer.module.scss";

const CountdownTimer = React.forwardRef(
  ({ timeCount = 10, onTimerComplete = () => {} }, ref) => {
    const [tickTimeout, setTickTimeout] = useState(null);
    const [gameEndSound, setGameEndSound] = useState(null);
    const [time, setTime] = useState(timeCount);
    const [startEndingSound, setStartEndingSound] = useState(false);
    const [paused, setPaused] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
      setGameEndSound(new Audio("/audio/endCountdown.mp3"));
    }, []);

    const reset = () => {
      // reset timer
      clearTimeout(tickTimeout);
      if (containerRef.current) {
        containerRef.current.classList.add(styles.paused);
        containerRef.current.classList.remove(styles.running);
      }
      setPaused(true);
      setTime(timeCount);
    };

    const pause = () => {
      // pause timer
      clearTimeout(tickTimeout);
      if (containerRef.current) {
        containerRef.current.classList.add(styles.paused);
        containerRef.current.classList.remove(styles.running);
      }
      setPaused(true);
      setStartEndingSound(false);
    };

    const start = () => {
      // start timer
      clearTimeout(tickTimeout);
      if (containerRef.current) {
        containerRef.current.classList.add(styles.running);
        containerRef.current.classList.remove(styles.paused);
      }
      setPaused(false);
    };

    const resetAndStart = () => {
      clearTimeout(tickTimeout);
      setTime(timeCount);
      if (containerRef.current) {
        containerRef.current.classList.remove(styles.paused);
        containerRef.current.classList.add(styles.running);
      }
      setStartEndingSound(false);
      setPaused(false);
    };

    useImperativeHandle(ref, () => ({
      reset,
      pause,
      start,
      resetAndStart,
    }));

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
      if (gameEndSound == null) return;

      if (startEndingSound) {
        gameEndSound.currentTime = 0;
        gameEndSound.play();
        gameEndSound.addEventListener("ended", () => {
          setStartEndingSound(false);
        });
      } else {
        gameEndSound.pause();
      }

      return () => {
        if (gameEndSound) {
          gameEndSound.pause();
        }
      };
    }, [startEndingSound]);

    return (
      <div className={styles.countdown_timer} tabIndex={0} ref={containerRef}>
        <div className={styles.countdown_timer__time}>{time}</div>
        <svg className={styles.svg_circle}>
          <circle
            r="45%"
            cx="50%"
            cy="50%"
            className={styles.svg_spinner_path}
          />
          <circle r="45%" cx="50%" cy="50%" className={styles.svg_spinner} />
        </svg>
      </div>
    );
  }
);
CountdownTimer.displayName = "CountdownTimer";
export default CountdownTimer;
