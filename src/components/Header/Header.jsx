import React from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/images/GTour.png";
import "../../assets/css/grid.css";
import { NavbarItems } from "../../dummyData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Badge } from "@mui/material";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="grid wide">
        <div className="row sm-gutter">
          <div className={`${styles.logo} col l-2 c-9 `}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={`${styles.NavMobile} col c-3`}>
            <ViewHeadlineIcon className={styles.MobileIcon} />
            <Badge badgeContent={4} color="error">
              <LocalMallIcon className={styles.cartIcon} />
            </Badge>
          </div>
          <nav className={`${styles.navbar} col l-10 `}>
            <ul className={styles["nav-list"]}>
              {NavbarItems.map((navbarItem) => (
                <li key={navbarItem.id} className={styles["nav-list-item"]}>
                  {navbarItem.name}
                  <KeyboardArrowDownIcon />
                  <ul className={styles["sub-nav-list"]}>
                    {navbarItem.subNavbar.map((subNavbar) => (
                      <li
                        className={styles["sub-nav-list-item"]}
                        key={subNavbar.id}
                      >
                        {subNavbar.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className={styles["sub-nav-list-item"]}>
                <Badge badgeContent={4} color="error">
                  <LocalMallIcon className={styles.cartIcon} />
                </Badge>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
