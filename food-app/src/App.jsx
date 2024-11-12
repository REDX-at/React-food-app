import { useState } from "react";
import Search from "./Component/Search";
import Card from "./Component/Card";
import styles from "./app.module.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className={styles.App}>
      <>
        <Search fooddata={foodData} setFoodData={setFoodData} />
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
      </>
    </div>
  );
}

export default App;
