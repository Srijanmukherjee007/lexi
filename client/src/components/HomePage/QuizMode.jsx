import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function QuizMode({ styles }) {
  return (
    <div className={clsx([styles.section, styles.quizmode])}>
      <div className={styles.quizmode__header}>
        <Image
          src="/images/owl.svg"
          alt="owl"
          width={100}
          height={100}
          className={styles.quizmode__header__image}
        />
        <div className={styles.quizmode__header__text}>quiz modes</div>
      </div>
      <div className={styles.quizmode__modes}>
        <Link href="/quizzes/mode/synonym">
          <a>synonym</a>
        </Link>

        <Link href="/quizzes/mode/antonym">
          <a>antonym</a>
        </Link>

        <Link href="/quizzes/mode/meaning">
          <a>meaning</a>
        </Link>

        <Link href="/quizzes">
          <a className={styles.quizmode__modes__more}>more...</a>
        </Link>
      </div>
    </div>
  );
}
