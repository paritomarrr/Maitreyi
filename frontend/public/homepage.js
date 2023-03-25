import React from "react";
import Navbar from "../components/navbar.js";
import Start from "../components/started.js";
import Layout from "../components/Layout";
import Footer from "../components/Footer/Footer.js";
import ChatBot from "../components/ChatBot/ChatBot";
import Emergency from "../components/Emergency/Emergency";

import styles from "../styles/Home.module.css";
import Darkmode from "darkmode-js";

const options = {
  bottom: "62px",
  right: "unset",
  left: "32px",
  time: "0.5s",
  mixColor: "#fff",
  backgroundColor: "#fff",
  buttonColorDark: "#100f2c",
  buttonColorLight: "#fff",
  saveInCookies: false,
  label: "🌓",
  autoMatchOsTheme: true,
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

const Homepage = () => {
  return (
    <>
      <Navbar />

      <Start />
      <Layout />
      <ChatBot />
      <Emergency />
      <Footer />
    </>
  );
};

export default Homepage;
