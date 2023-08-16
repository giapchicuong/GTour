import React from "react";
import styles from "./bestValueTrips.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Rating } from "@mui/material";

export default function BestValueTrips(props) {
  const { title, description, BestValueTripsItems } = props;

  return (
    <div className={styles.container}>
      <div className="grid wide">
        <div className={styles.title}>{title}</div>
        <div className={styles.des}>{description}</div>
        <div className={styles.items}>
          <div className="row sm-gutter">
            {BestValueTripsItems.map((BestValueTripsItem, index) => (
              <div key={index} className={`${styles.item} col c-12 l-4`}>
                <div className={styles.image}>
                  <img src={BestValueTripsItem.img} alt="Best Value Trips" />
                </div>
                <div className={styles.text}>
                  <div className={styles.price}>
                    <div className={styles.discount}>
                      {BestValueTripsItem.discount ? "$" : ""}
                      {BestValueTripsItem.discount || ""}{" "}
                    </div>
                    ${BestValueTripsItem.price.toLocaleString()}
                  </div>
                  <div className={styles.ItemTitle}>
                    {BestValueTripsItem.title}
                  </div>
                  <div className={styles.ItemDes}>{BestValueTripsItem.des}</div>
                  <div className={styles.bottom}>
                    <div className={styles.reviews}>
                      <Rating
                        name="read-only"
                        value={BestValueTripsItem.reviews}
                        className={styles.ReviewIcon}
                      />
                      {BestValueTripsItem.reviews} reviews
                    </div>
                    <div className={styles.days}>
                      <AccessTimeIcon className={styles.icon} />
                      {BestValueTripsItem.days} days
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
