import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import styles from "@styles/Footer.module.scss";

// const useStyles = makeStyles((theme) => ({
//   displayContainer: {
//     display: "flex",
//     flexDirection: "column",
//     margin: "1rem",
//   },
//   listItem: {
//     // margin: "5px",
//     color: "#fff",
//     // marginBottom: "",
//   },
//   icons: {
//     marginTop: "2px",
//     color: "#fff",
//     fontSize: "clamp(1.5rem, 4vh, 2rem)",
//     position: "relative",
//     paddingLleft: "0",
//     marginBottom: "clamp(1rem, 3vh, 2rem)",
//   },
// }));

export default function Footer({ children }) {
  //   const classes = useStyles();
  return (
    <>
      {children ? <div className={styles.children}>{children}</div> : null}
      <div className={styles.footer}>
        <div className={styles.footer__section}>
          <a href="/quizzes" className={styles.footer__section__header}>
            Quizzes
          </a>
          <a href="/quizzes/mode/synonym">Synonym</a>
          <a href="/quizzes/mode/antonym">Antonym</a>
          <a href="/quizzes/mode/meaning">Definition</a>
        </div>
        <div className={styles.footer__section}>
          <a className={styles.footer__section__header}>Support</a>
          <a href="#link-to-contact-us-page">Contact us</a>
          <a href="/">Report a question</a>
          <a href="/">Report bug</a>
        </div>

        <div className={styles.footer__section}>
          <a className={styles.footer__section__header}>
            <GitHubIcon className={styles.icon} /> Developers
          </a>
          <a href="https://github.com/Srijanmukherjee007">Srijan Mukherjee</a>
          <a href="https://github.com/therealozp">Khang Le</a>
        </div>

        <div className={styles.footer__section}>
          <a className={styles.footer__section__header}>Project Links</a>
          <a href="https://github.com/therealozp/lexi">
            <CodeIcon className={styles.icon} /> Source Code
          </a>
          <a href="https://github.com/therealozp/lexi">
            <LinkIcon className={styles.icon} /> Devpost
          </a>
        </div>
      </div>

      <div className={styles.ending}>
        developed by <a href="https://github.com/Srijanmukherjee007">srijan</a>{" "}
        and <a href="https://github.com/therealozp">khang</a> with ❤️
      </div>
    </>
  );
}
