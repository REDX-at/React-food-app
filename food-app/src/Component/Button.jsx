import styles from "./card.module.css";

export default function Button({ setStyleopacity }) {
  return (
    <div className={styles.flexit}>
      <button
        onClick={() => {
          console.log("View Recipe");
          setStyleopacity(styles.show);
        }}
        className={styles.button}
      >
        View Infos
      </button>
      <button
        onClick={() => {
          console.log("Hide Recipe");
          setStyleopacity(styles.opacity);
        }}
        className={styles.button}
      >
        Hide Infos
      </button>
    </div>
  );
}
