import Header from "./navbar";
import Footer from "./Footer/Footer";
import React, { Component } from "react";
import ContactUs from "./Footer/ContactUs";
import Dictaphone from "./Dictaphone";

class Layout extends Component {
  render() {
    return (
      <div>
        {/* <Dictaphone /> */}

        <Header />
        {this.props.children}
        {/* <ContactUs /> */}
        {/* <Footer /> */}
        {/* <Dictaphone /> */}
      </div>
    );
  }
}

export default Layout;
