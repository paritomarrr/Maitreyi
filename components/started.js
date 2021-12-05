import React from "react";
import Link from "next/link";
import styles from "./started.module.css";
import moment from "moment";
import Dictaphone from "./Dictaphone";
// import backgroundImg from "../components/images/bgimg.png";
// moment().format("MMM Do YY");

const Start = () => {
  function getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  function getnextDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate() + 28;
    let month = newDate.getMonth() + 1;
    // {
    //   console.log(moment(month).format("MMM Do YY"));
    // }
    if (date > 30) {
      month = (newDate.getMonth() % 12) + 2;
    }
    let year = newDate.getFullYear();
    if (month > 12) {
      year = newDate.getFullYear() + 1;
    }
    const fullDate = date + " " + month + " " + year;
    // console.log(fullDate);
    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date % 30}`;
  }

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.imagee}
          style={{
            zIndex: 1,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="https://flo.health/media/5007/download/img_hero.png?v=1"
        />
        <h1 className={styles.title}>
          <span>Know yourself</span> a bit better.
        </h1>
        <div className={styles.periodFlex}>
          <h4 className={styles.heading}>Period Cycle: 28 days</h4>

          <h4 className={styles.heading}>
            Period just started: {getCurrentDate("-")}
          </h4>
          <h4 className={styles.heading}>
            Next Period Date: {getnextDate("-")}
          </h4>
        </div>
        <Link style={{ marginBottom: "50px" }} href="/calender">
          <button style={{ marginBottom: "50px" }} className={styles.button}>
            Track Your Period
          </button>
        </Link>
        {/* <Dictaphone /> */}
        <br />
      </div>
    </>
  );
};
export default Start;
