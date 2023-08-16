import React from "react";
import styles from "./popularDestinations.module.scss";

export default function PopularDestinations(props) {
  const { title, description, destinations } = props;

  return (
    <div className={styles.container}>
      <div className="grid wide">
        <div className={styles.title}>{title}</div>
        <div className={styles.des}>{description}</div>
        <div className={styles.items}>
          <div className="row sm-gutter">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className={`${styles.item} col l-3 c-12`}
              >
                <div className={styles.title}>{destination.title}</div>
                <div className={styles.image}>
                  <img src={destination.img} alt="Destination"  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
