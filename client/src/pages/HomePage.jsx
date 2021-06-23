import { Landing, QuizMode, About } from "@components/HomePage";
import Footer from "@components/Commons/Footer";
import styles from "@styles/Home.module.scss";
import { Button, Divider } from "@material-ui/core";
import clsx from "clsx";

export default function Home() {
  return (
    <div className={styles.home}>
      <Landing styles={styles} />
      <QuizMode styles={styles} />
      <Divider variant="middle" />
      <About styles={styles} />
      {/* <QuizCount /> */}
      <Footer>
        <div className={styles.footer__call_to_action}>
          <Button className={styles.call_to_action_button}>get started</Button>
          <Button
            className={clsx([
              styles.call_to_action_button,
              styles.call_to_action_button_quick_test,
            ])}
          >
            quick test
          </Button>
        </div>
      </Footer>
    </div>
  );
}
