import styles from "./ProductCard.module.css";

interface ProductCardProps {
  name: string;
  price: number;
  icon?: string;
}

export function ProductCard({
  name,
  price,
  icon = "🍗",
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.textSide}>
        <div className={styles.iconWrapper}>
          <span className={styles.productIcon}>{icon}</span>
        </div>

        <div className={styles.textContent}>
          <h3 className={styles.productName}>{name}</h3>

          <div className={styles.priceTag}>
            <span className={styles.currency}>R$</span>
            <span className={styles.priceValue}>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
