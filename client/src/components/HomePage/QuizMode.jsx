import Image from "next/image";
import clsx from "clsx";

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
        <a href="/quizzes/mode/synonym">synonym</a>
        <a href="/quizzes/mode/antonym">antonym</a>
        <a href="/quizzes/mode/meaning">meaning</a>
        <a href="/quizzes" className={styles.quizmode__modes__more}>
          more...
        </a>
      </div>
    </div>
  );
}
