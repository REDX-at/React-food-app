import styles from "../app.module.css";
import Card from "./Card";

export default function Food({ foodData }) {
  return (
    <div>
      <div className={styles.gridApp}>
        {foodData.map((food) => (
          <Card
            name={food.name}
            id={food.id}
            image={food.image}
            ingredients={food.ingredients}
            difficulty={food.difficulty}
            rating={food.rating}
          />
        ))}
      </div>
    </div>
  );
}
