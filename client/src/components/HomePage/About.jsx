import Image from "next/image";
import clsx from "clsx";

export default function About({ styles }) {
  return (
    <div className={clsx([styles.section, styles.about])}>
      <div className={styles.about__header}>
        <div className={styles.about__header__text}>About</div>
        <Image
          src="/images/pirahna.svg"
          alt="owl"
          width={150}
          height={150}
          className={styles.about__header__image}
        />
      </div>
      <div className={styles.about__text}>
        Lexi is an online platform to take fun and interactive English
        vocabulary quizzes. The quizzes contains words of daily use, and thus
        can help you effectively improve your vocabulary.
      </div>
    </div>
  );
}
