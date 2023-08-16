import React, { useState } from "react";
import styles from "./search.module.scss";
import "../../assets/css/grid.css";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
export default function Search(props) {
  const {
    title,
    description,
    SearchCategoriesItems,
    SearchSortByDateItems,
    SearchDestinationItems,
    SearchMonthItems,
  } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={styles.search}>
      <div className="grid wide">
        <div className="row sm-gutter">
          <div className={`${styles.title} col l-12 c-12`}>{title}</div>
          <div className={`${styles.des} col l-12 c-12`}>{description}</div>
          <div className={`${styles.Items}`}>
            <div className="row sm-gutter">
              <div className={`${styles.Item} col l-3 c-12`}>
                <Input
                  type="text"
                  className={styles.Input}
                  placeholder="Search"
                />
                <SearchIcon className={styles.Icon} />
              </div>
              <div className={`${styles.Item} col l-3 c-12`}>
                <Box className={styles.Box}>
                  <FormControl fullWidth className={styles.Form}>
                    <InputLabel id="deSearchIconmo-simple-select-label">
                      Any Month
                    </InputLabel>
                    <Select>
                      {SearchMonthItems.map((SearchMonthItem) => (
                        <MenuItem value={SearchMonthItem.title}>{SearchMonthItem.title}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <CalendarMonthIcon className={styles.Icon} />
                </Box>
              </div>
              <div className={`${styles.Item} col l-3 c-12`}>
                <Box className={styles.Box}>
                  <FormControl fullWidth className={styles.Form}>
                    <InputLabel>Sort By Date</InputLabel>
                    <Select>
                      {SearchSortByDateItems.map((SearchSortByDateItem) => (
                        <MenuItem value={SearchSortByDateItem.title}>{SearchSortByDateItem.title}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <ImportExportIcon className={styles.Icon} />
                </Box>
              </div>
              <div className={`${styles.Item} col l-3 c-12`}>
                <Button style={{ color: "white" }} className={styles.Button}>
                  Search
                </Button>
              </div>
              {show && (
                <>
                  <div className={`${styles.Item} col l-3 c-12`}>
                    <Box className={styles.Box}>
                      <FormControl fullWidth className={styles.Form}>
                        <InputLabel id="deSearchIconmo-simple-select-label">
                          All Categories
                        </InputLabel>
                        <Select>
                          {SearchCategoriesItems.map((SearchCategoriesItem) => (
                            <MenuItem value={SearchCategoriesItem.title}>{SearchCategoriesItem.title}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className={`${styles.Item} col l-3 c-12`}>
                    <Box className={styles.Box}>
                      <FormControl fullWidth className={styles.Form}>
                        <InputLabel>Any Destinations</InputLabel>
                        <Select>
                        {SearchDestinationItems.map((SearchDestinationItem) => (
                            <MenuItem value={SearchDestinationItem.title}>{SearchDestinationItem.title}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className={`${styles.Item} col l-3 c-12`}>
                    <Input
                      type="text"
                      className={styles.Input}
                      placeholder="Max budget ex. 500"
                    />
                    <AttachMoneyIcon className={styles.Icon} />
                  </div>
                </>
              )}
            </div>
            <div className={styles.Item} onClick={handleClick}>
              {show ? (
                <KeyboardArrowUpIcon className={styles.IconAdvan} />
              ) : (
                <KeyboardArrowDownIcon className={styles.IconAdvan} />
              )}
              Advanced Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
