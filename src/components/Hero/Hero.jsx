import React from "react";
import styles from "./hero.module.scss";
import video from "../../assets/images/Spectacular Norway - from the air.mp4";
import Search from "../../components/Search/Search";
import {
  SearchCategoriesItems,
  SearchSortByDateItems,
  SearchDestinationItems,
  SearchMonthItems,
} from "../../dummyData";
export default function Hero() {
  return (
    <div className={styles.herobackGround}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Search
        title="Where do you want to go?"
        description="Trips, experiences, and places. All in one service."
        SearchCategoriesItems={SearchCategoriesItems}
        SearchSortByDateItems={SearchSortByDateItems}
        SearchDestinationItems={SearchDestinationItems}
        SearchMonthItems={SearchMonthItems}
      />
    </div>
  );
}
