import { useState } from "react";
import styles from "./card.module.css";
import Button from "./Button";

export default function Card({
  name,
  id,
  image,
  ingredients,
  difficulty,
  rating,
}) {
  const diff = "⭐️".repeat(rating);
  let stylesDiff = "";
  if (difficulty === "Easy") {
    stylesDiff = styles.easy;
  } else if (difficulty === "Medium") {
    stylesDiff = styles.medium;
  } else if (difficulty === "Hard") {
    stylesDiff = styles.hard;
  }
  const [styleopacity, setStyleopacity] = useState(styles.opacity);

  return (
    <div className={styles}>
      <div key={id} className={styles.container}>
        <div>
          <img src={image} width="400"></img>
          <Button setStyleopacity={setStyleopacity} />
        </div>
        <div className={`${styles.info} ${styleopacity}`}>
          <h1 className={styles.name}>{name}</h1>
          <div>
            <h2>Ingredient :</h2>
            <h2 className={styles.ingredients}>{ingredients}</h2>
          </div>
          <div className={styles.subinfos}>
            <div>
              <h3 className={styles.difficulty}>difficulty : {difficulty}</h3>
              <div className={stylesDiff}></div>
            </div>
            <h3 className={styles.rating}>{diff}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
