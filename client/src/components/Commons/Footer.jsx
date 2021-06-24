import { Grid, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import styles from "@styles/Footer.module.scss";
import { Code } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  displayContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "0 2vw",
  },
  listItem: {
    margin: "5px",
    color: "#fff",
    // marginBottom: "",
  },
  icons: {
    color: "#fff",
    fontSize: "clamp(1rem, 4vw, 3rem)",
    marginBottom: "2.5vh",
  },
}));

export default function Footer({ children }) {
  const classes = useStyles();
  return (
    <>
      <div className={styles.footer}>
        <div style={{ width: "100%" }}>{children}</div>
        <Grid container spacing={3}>
          <Grid item xs={6} className={styles.footer__section_left}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className={classes.displayContainer}
                style={{ marginRight: "4vw" }}
              >
                <a className={styles.footer__section__header}>made with</a>
                <p className={classes.listItem}>React</p>
                <p className={classes.listItem}>NextJS</p>
                <p className={classes.listItem}>Material UI</p>
              </div>
              <div className={classes.displayContainer}>
                <GitHubIcon className={classes.icons} />
                <a href="https://github.com/mukherjeesrijan2">
                  Srijan Mukherjee
                </a>
                <a href="https://github.com/therealozp">Khang Le</a>
              </div>
              <div className={classes.displayContainer}>
                <a href="https://github.com/therealozp/lexi">
                  <CodeIcon className={classes.icons} />
                </a>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className={styles.footer__section_right}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={classes.displayContainer}>
                <a href="/quizzes" className={styles.footer__section__header}>
                  quizzes
                </a>
                <a href="/">Synonym</a>
                <a href="/">Antonym</a>
                <a href="/">Definition</a>
              </div>
              <div className={classes.displayContainer}>
                <a href="/" className={styles.footer__section__header}>
                  support
                </a>
                <a href="/">Contact us</a>
                <a href="/">Report a question</a>
                <a href="/">Report bug</a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.ending}>developed by srijan and khang with ❤️</div>
    </>
  );
}
