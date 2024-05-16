import React, { Component } from "react";
import {NavStyle, UlStyle, AStyle} from "./StyledHeader";

class Header extends Component {
  render() {
    return (
      <NavStyle>
        <h3>Logo</h3>
        <UlStyle>
          <li><AStyle>Home</AStyle></li>
          <li><AStyle>About</AStyle></li>
          <li><AStyle>Program</AStyle></li>
          <li><AStyle>Careers</AStyle></li>
          <li><AStyle>Contact Us</AStyle></li>
        </UlStyle>
      </NavStyle>
    );
  }
}

export default Header;