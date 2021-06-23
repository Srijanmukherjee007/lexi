import Image from "next/image";
import { Button } from "@material-ui/core";
import clsx from "clsx";

export default function Landing({ styles, innerRef }) {
  return (
    <div ref={innerRef}>
      <div className={styles.landing}>
        <div className={styles.landing__nav}>
          <div className={styles.landing__title}>Lexi</div>
          <ul className={styles.landing__nav__links}>
            <li>
              <a href="/" className={styles.landing__nav__link__active}>
                Home
              </a>
              <a href="/quizzes">Quizzes</a>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>

        <div className={styles.landing__hero}>
          <div className={styles.landing__image__container}>
            <Image
              src="/images/landing.svg"
              alt="landing image"
              layout="fill"
              className={styles.landing__image}
            />
          </div>

          <div className={styles.landing__call_to_action}>
            <p className={styles.landing__call_to_action_catchphrase}>
              Improve your vocabulary
            </p>
            <Button className={styles.landing__call_to_action_button}>
              get started
            </Button>
            <Button
              className={clsx([
                styles.landing__call_to_action_button,
                styles.landing__call_to_action_button_quick_test,
              ])}
            >
              quick test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
