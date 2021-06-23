export default function QuizItem({ styles, url, title }) {
  return (
    <div className={styles.quizItem}>
      <a href={url} className={styles.quizItem__link}>
        {title}
      </a>
    </div>
  );
}
