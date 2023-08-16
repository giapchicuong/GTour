import React from "react";
import styles from "./popularDestinations.module.scss";
import "../../assets/css/grid.css";
import { PopularDestinationsItems } from "../../dummyData";
export default function PopularDestinations() {
  return (
    <div className={styles.container}>
      <div className="grid wide">
        <div className={styles.title}>Popular Destinations</div>
        <div className={styles.des}>
          World's best tourist destinations
          <div className={styles.items}>
            <div className="row sm-gutter">
              {PopularDestinationsItems.map((PopularDestinationsItem) => (
                <div
                  key={PopularDestinationsItem.id}
                  className={`${styles.item} col l-3 c-12`}
                >
                  <div className={styles.title}>{PopularDestinationsItem.title}</div>
                  <div className={styles.image}>
                    <img src={PopularDestinationsItem.img} alt="Destination"  />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
