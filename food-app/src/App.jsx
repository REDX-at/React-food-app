import { useState } from "react";
import Search from "./Component/Search";
import Card from "./Component/Card";
import Food from "./Component/Food";
import styles from "./app.module.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className={styles.App}>
      <>
        <Search fooddata={foodData} setFoodData={setFoodData} />
        <Food foodData={foodData} />
      </>
    </div>
  );
}

export default App;
