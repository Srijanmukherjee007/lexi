import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import styles from "@styles/Footer.module.scss";

export default function Footer({ children }) {
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-oclSznzKfrLUyoMuu4FAc_5NmzxXqpH8cU_wNX8hr0BoRA/viewform?usp=sf_link">
            Contact us
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeaLx4__Kz6889hZCz-XPci5sPwKOUqxNoWwPEKuMpR8r_7kw/viewform?usp=sf_link">
            Report a question
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeaLx4__Kz6889hZCz-XPci5sPwKOUqxNoWwPEKuMpR8r_7kw/viewform?usp=sf_link">
            Report a bug
          </a>
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
          <a href="https://devpost.com/software/lexi-axt3ei">
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
