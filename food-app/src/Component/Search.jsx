import { useEffect, useState } from "react";
import styles from "./search.module.css";

// const URL = "https://api.spoonacular.com/recipes/complexSearch";
// const API_KEY = "ac1cb2a4378e4c1a8de8a522f4e55d86";
const URL = "https://dummyjson.com/recipes/search";
const API_KEY = "ac1cb2a4378e4c1a8de8a522f4e55d86";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  const [isvisible, setIsvisible] = useState(false);
  let visxi = true;
  useEffect(() => {
    setIsvisible(true);
  }, []);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?q=${query}`);
      const data = await res.json();
      console.log(data.recipes);
      setFoodData(data.recipes);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
      ></input>
    </div>
  );
}
