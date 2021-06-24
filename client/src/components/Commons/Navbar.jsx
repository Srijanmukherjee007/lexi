import styles from "@styles/Navbar.module.scss";
import clsx from "clsx";

const links = [
  {
    url: "/",
    title: "Home",
    name: "home",
  },
  {
    url: "/quizzes",
    title: "Quizzes",
    name: "quizzes",
  },
  {
    url: "/about",
    title: "About",
    name: "about",
  },
];

export default function Navbar({ innerRef, activeNavLink = null }) {
  return (
    <div className={styles.navbar} ref={innerRef}>
      <div className={styles.navbar__nav}>
        <div className={styles.navbar__title}>Lexi</div>
        <ul className={styles.navbar__nav__links}>
          {links.map((link, key) => (
            <li key={key}>
              <a
                href={activeNavLink === link.name ? null : link.url}
                className={clsx({
                  [styles.navbar__nav__link__active]:
                    activeNavLink === link.name,
                })}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { styles };
