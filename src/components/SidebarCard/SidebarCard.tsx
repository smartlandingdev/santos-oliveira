import styles from './SidebarCard.module.css';

interface SidebarItem {
  name: string;
  description?: string;
  price: number;
  icon: string;
}

interface SidebarCardProps {
  title: string;
  items: SidebarItem[];
}

export function SidebarCard({ title, items }: SidebarCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.itemLeft}>
              <span className={styles.itemIcon}>{item.icon}</span>
              <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.name}</span>
                {item.description && (
                  <span className={styles.itemDescription}>{item.description}</span>
                )}
              </div>
            </div>
            <div className={styles.priceTag}>
              <span className={styles.currency}>R$</span>
              <span className={styles.priceValue}>{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
