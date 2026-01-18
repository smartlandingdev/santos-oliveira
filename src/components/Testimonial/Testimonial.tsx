import styles from './Testimonial.module.css';

export function Testimonial() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.container}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <span key={index} className={styles.star}>★</span>
          ))}
        </div>
        <blockquote className={styles.verse}>
          <p className={styles.verseText}>
            "Todo ser que respira louve o Senhor."
          </p>
          <p className={styles.verseHighlight}>Aleluia!</p>
          <cite className={styles.verseReference}>Salmos 150:6</cite>
        </blockquote>
      </div>
    </footer>
  );
}
