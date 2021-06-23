import { Grid } from "@material-ui/core";
import styles from "@styles/Footer.module.scss";

export default function Footer({ children }) {
  return (
    <>
      <div className={styles.footer}>
        {children}
        <Grid container spacing={5}>
          <Grid item className={styles.footer__section}>
            <a href="/" className={styles.footer__section__header}>
              quizzes
            </a>
            <a href="/">synonym</a>
            <a href="/">antonym</a>
            <a href="/">definition</a>
          </Grid>

          <Grid item className={styles.footer__section}>
            <a href="/" className={styles.footer__section__header}>
              support
            </a>
            <a href="/">Contact us</a>
            <a href="/">Report a question</a>
            <a href="/">Report bug</a>
          </Grid>
        </Grid>
      </div>
      <div className={styles.ending}>developed by srijan and khang with ❤️</div>
    </>
  );
}
