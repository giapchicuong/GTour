import React from "react";
import styles from "./footer.module.scss";
import "../../assets/css/grid.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className="grid wide">
        <div className={styles.items}>
          <div className="row sm-gutter">
            <div className={`${styles.item} col l-4 c-12`}>
              <div className={styles.title}>Our Awards</div>
              <div className={styles.des}>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </div>
              <div className={styles.img}>
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.item} col l-4 c-12`}>
              <div className={styles.title}>Contact Info</div>
              <div className={styles.ItemContact}>
                <PhoneAndroidIcon className={styles.icon} />
                1-567-124-44227
              </div>
              <div className={styles.ItemContact}>
                <HomeIcon className={styles.icon} />
                184 Main Street East Perl Habour 8007
              </div>
              <div className={styles.ItemContact}>
                <AccessTimeIcon className={styles.icon} />
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </div>
              <div className={styles.ContactIconItem}>
                <FacebookRoundedIcon className={styles.ContactIcon} />
                <TwitterIcon className={styles.ContactIcon} />
                <YouTubeIcon className={styles.ContactIcon} />
                <PinterestIcon className={styles.ContactIcon} />
                <InstagramIcon className={styles.ContactIcon} />
              </div>
            </div>
            <div className={`${styles.item} col l-4 c-12`}>
              <div className={styles.title}>Recent Trips</div>
              <div className="row sm-gutter">
                <div className={`${styles.RecentImg} col l-4 c-4`}>
                  <img
                    src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                    alt="Recent Trips"
                  />
                </div>
                <div className={`${styles.RecentImg} col l-4 c-4`}>
                  <img
                    src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                    alt="Recent Trips"
                  />
                </div>
                <div className={`${styles.RecentImg} col l-4 c-4`}>
                  <img
                    src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                    alt="Recent Trips"
                  />
                </div>
                <div className={`${styles.RecentImg} col l-4 c-4`}>
                  <img
                    src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                    alt="Recent Trips"
                  />
                </div>
                <div className={`${styles.RecentImg} col l-4 c-4`}>
                  <img
                    src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg "
                    alt="Recent Trips"
                  />
                </div>
                <div className={`${styles.RecentImg} col l-4 c-4`}>
                  <img
                    src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                    alt="Recent Trips"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className="row sm-gutter">
            <div className={`${styles.left} col l-6 c-12`}>
              © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
            </div>
            <div className={`${styles.right} col l-6 c-12`}>
              <div className={styles.BottomNav}>
                <div className={styles.NavItem}>Home</div>
                <div className={styles.NavItem}>Tours</div>
                <div className={styles.NavItem}>Blog</div>
                <div className={styles.NavItem}>Purchase Theme</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
