import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import styles from "@styles/Footer.module.scss";
import Link from "next/link";
export default function Footer({ children }) {
  return (
    <>
      {children ? <div className={styles.children}>{children}</div> : null}
      <div className={styles.footer}>
        <div className={styles.footer__section}>
          <Link href="/quizzes">
            <a className={styles.footer__section__header}>Quizzes</a>
          </Link>
          <Link href="/quizzes/mode/synonym">
            <a>Synonym</a>
          </Link>

          <Link href="/quizzes/mode/antonym">
            <a>Antonym</a>
          </Link>

          <Link href="/quizzes/mode/meaning">
            <a>Definition</a>
          </Link>
        </div>
        <div className={styles.footer__section}>
          <a className={styles.footer__section__header}>Support</a>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe-oclSznzKfrLUyoMuu4FAc_5NmzxXqpH8cU_wNX8hr0BoRA/viewform?usp=sf_link">
            <a>Contact us</a>
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeaLx4__Kz6889hZCz-XPci5sPwKOUqxNoWwPEKuMpR8r_7kw/viewform?usp=sf_link">
            <a>Report a question</a>
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeaLx4__Kz6889hZCz-XPci5sPwKOUqxNoWwPEKuMpR8r_7kw/viewform?usp=sf_link">
            <a>Report a bug</a>
          </Link>
        </div>

        <div className={styles.footer__section}>
          <a className={styles.footer__section__header}>
            <GitHubIcon className={styles.icon} /> Developers
          </a>
          <Link href="https://github.com/Srijanmukherjee007">
            <a>Srijan Mukherjee</a>
          </Link>
          <Link href="https://github.com/therealozp">
            <a>Khang Le</a>
          </Link>
        </div>

        <div className={styles.footer__section}>
          <a className={styles.footer__section__header}>Project Links</a>
          <Link href="https://github.com/therealozp/lexi">
            <a>
              <CodeIcon className={styles.icon} /> Source Code
            </a>
          </Link>
          <Link href="https://devpost.com/software/lexi-axt3ei">
            <a>
              <LinkIcon className={styles.icon} /> Devpost
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.ending}>
        developed by{" "}
        <Link href="https://github.com/Srijanmukherjee007">
          <a>srijan</a>
        </Link>
        {" "}and{" "}
        <Link href="https://github.com/therealozp">
          <a>khang</a>
        </Link>
        {" "}with ❤️
      </div>
    </>
  );
}
