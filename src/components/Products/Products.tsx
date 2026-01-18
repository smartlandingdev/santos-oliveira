import styles from './Products.module.css';

const quentinhas = [
  { name: 'Galinha Assada Completa', price: 20 },
  { name: 'Marmita Tradicional', price: 18 },
  { name: 'Marmita Fitness', price: 22 },
  { name: 'Porção de Batata Frita', price: 15 },
];

const bebidas = [
  { name: 'Refrigerante Lata', price: 5 },
  { name: 'Refrigerante 2L', price: 12 },
  { name: 'Água Mineral', price: 4 },
  { name: 'Suco Natural', price: 8 },
];

const unidades = [
  { name: 'Frango Assado Inteiro', price: 45 },
  { name: 'Meio Frango Assado', price: 25 },
  { name: 'Coxa e Sobrecoxa', price: 18 },
];

const porcoes = [
  { name: 'Batata Frita', price: 15 },
  { name: 'Arroz', price: 8 },
  { name: 'Farofa', price: 6 },
  { name: 'Vinagrete', price: 5 },
];

export function Products() {
  return (
    <section className={styles.products} id="cardapio">
      <div className={styles.container}>
        {/* Linha 1: Quentinhas + Bebidas */}
        <div className={styles.row}>
          {/* Card Quentinhas - maior */}
          <div className={styles.cardLarge}>
            <h2 className={styles.cardTitle}>Quentinhas</h2>
            <div className={styles.cardContent}>
              <ul className={styles.itemList}>
                {quentinhas.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>R$ {item.price.toFixed(2)}</span>
                    <button className={styles.chooseButton}>Escolher</button>
                  </li>
                ))}
              </ul>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>Imagem</span>
              </div>
            </div>
          </div>

          {/* Card Bebidas - menor */}
          <div className={styles.cardSmall}>
            <h2 className={styles.cardTitle}>Bebidas</h2>
            <ul className={styles.itemListCompact}>
              {bebidas.map((item, index) => (
                <li key={index} className={styles.itemCompact}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>R$ {item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha 2: Unidades */}
        <div className={styles.cardLarge}>
          <h2 className={styles.cardTitle}>Unidades</h2>
          <div className={styles.cardContent}>
            <ul className={styles.itemList}>
              {unidades.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>R$ {item.price.toFixed(2)}</span>
                  <button className={styles.chooseButton}>Escolher</button>
                </li>
              ))}
            </ul>
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderText}>Imagem</span>
            </div>
          </div>
        </div>

        {/* Linha 3: Porções */}
        <div className={styles.cardLarge}>
          <h2 className={styles.cardTitle}>Porções</h2>
          <div className={styles.cardContent}>
            <ul className={styles.itemList}>
              {porcoes.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>R$ {item.price.toFixed(2)}</span>
                  <button className={styles.chooseButton}>Escolher</button>
                </li>
              ))}
            </ul>
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderText}>Imagem</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
