import React from "react";
import styles from "./blog.module.scss";
import "../../assets/css/grid.css";
import { BlogItems } from "../../dummyData";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Blog() {
  return (
    <div className={styles.container}>
      <div className="grid wide">
        <div className={styles.title}>Articles & Tips</div>
        <div className={styles.des}>Explore some of the best tips from around the world
</div>
        <div className={styles.items}>
          <div className="row sm-gutter">
            {BlogItems.map((BlogItem) => (
              <div className={`${styles.item} col l-4 c-12`}>
                <div className={styles.image}>
                  <img src={BlogItem.img} alt="Best Value Trips" />
                </div>
                <div className={styles.text}>
                  <div className={styles.date}>{BlogItem.date}</div>
                  <div className={styles.ItemTitle}>{BlogItem.title}</div>
                  <div className={styles.ItemDes}>{BlogItem.des}</div>
                  <div className={styles.readMore}>Read More <ArrowForwardIosIcon className={styles.icon}/></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
