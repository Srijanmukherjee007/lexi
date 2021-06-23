import Image from "next/image";
import { Button } from "@material-ui/core";
import Navbar from "@components/Navbar";
import AnimatedLogo from "@components/AnimatedLogo";
import clsx from "clsx";

export default function Landing({ styles }) {
  return (
    <>
      <div className={styles.landing}>
        <Navbar />
        {/* <div className={styles.landing__title}>Lexi</div> */}

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
    </>
  );
}
