import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import styles from "@styles/Navbar.module.scss";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ innerRef }) {
  return (
    <div className={styles.navbar} ref={innerRef}>
      <div className={styles.navbar__nav}>
        <div className={styles.navbar__title}>Lexi</div>
        <ul className={styles.navbar__nav__links}>
          <li>
            <a href="/" className={styles.navbar__nav__link__active}>
              Home
            </a>
            <a href="/">Quizzes</a>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { styles };
