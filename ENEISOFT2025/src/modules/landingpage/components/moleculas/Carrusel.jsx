import React from "react";
import styles from "./Carrusel.module.css";

export function Carrusel({ items = [], height = "200px" }) {
  const quantity = items.length;

  const handleClick = (text) => {
    alert(`Has hecho clic en: ${text}`);
  };

  return (
    <section
      className={styles.container}
      style={{
        "--height": height,
        "--quantity": quantity,
      }}
    >
      <div className={styles.slider}>
        <div className={styles.list}>
          {items.map((text, index) => (
            <div
              key={index}
              className={styles.item}
              style={{ "--position": index + 1 }}
              onClick={() => handleClick(text)}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
