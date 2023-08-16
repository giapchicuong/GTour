import React from "react";
import styles from "./testimonials.module.scss";

export default function Testimonials(props) {
  const { title, description, testimonialItems } = props;

  return (
    <div className={styles.container}>
      <div className="grid wide">
        <div className={styles.title}>{title}</div>
        <div className={styles.des}>{description}</div>
        <div className={styles.items}>
          <div className="row sm-gutter">
            {testimonialItems.map((TestimonialsItem) => (
              <div key={TestimonialsItem.id} className={`${styles.item} col l-4 c-12`}>
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
  );
}
