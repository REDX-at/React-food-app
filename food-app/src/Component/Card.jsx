import styles from "./card.module.css";

export default function Card({
  name,
  id,
  image,
  ingredients,
  difficulty,
  rating,
}) {
  const diff = "⭐️".repeat(rating);
  return (
    <div className={styles}>
      <div key={id} className={styles.container}>
        <img src={image} width="400"></img>
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.ingredients}>{ingredients}</h2>
          <div className={styles.subinfos}>
            <h3 className={styles.difficulty}>difficulty : {difficulty}</h3>
            <h3 className={styles.rating}>{diff}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
