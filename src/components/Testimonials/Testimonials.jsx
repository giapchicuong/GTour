import React from "react";
import styles from "./testimonials.module.scss";
import "../../assets/css/grid.css";
import { TestimonialsItems } from "../../dummyData";
export default function Testimonials() {
  return (
    <div className={styles.container}>
      <div className="grid wide">
        <div className={styles.title}>Why Choose Us</div>
        <div className={styles.des}>
          Here are reasons you should plan trip with us
          <div className={styles.items}>
            <div className="row sm-gutter">
              {TestimonialsItems.map((TestimonialsItem) => (
                <div className={`${styles.item} col l-4 c-12`}>
                  <div className={styles.img}>
                    <img
                      src={TestimonialsItem.img}
                      alt="TestimonialsItemsImg"
                    />
                  </div>
                  <div className={styles.ItemTitle}>{TestimonialsItem.title}</div>
                  <div className={styles.ItemDes}>{TestimonialsItem.des}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
