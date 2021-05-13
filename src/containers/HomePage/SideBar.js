import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./style.css";
import { BiPhoneCall, BiChat } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default function SideBar({ setActiveBar, activeBar }) {
  React.useEffect(() => {
    // if (activeBar === "none") setActiveBar("online members");
  }, []);
  const sidebar_navtext = {
    margin: "0 0 1rem 0",
    fontSize: ".8rem",
    fontWeight: "medium",
    fontStyle: "",
  };

  const sidebar_navlogo = {
    margin: "0 0 1.2rem 0",
    padding: ".7rem 0 0 0",
    fontSize: "2rem",
  };
  return (
    <div>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
          setActiveBar(selected);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="active members">
          <NavItem eventKey="recent chat">
            <NavIcon>
              <BiChat style={sidebar_navlogo} />
            </NavIcon>
            <NavText className="sidebar-navtext" style={sidebar_navtext}>
              Recent Chats
            </NavText>
          </NavItem>

          <NavItem eventKey="intrest member">
            <NavIcon>
              <MdCardMembership style={sidebar_navlogo} />
            </NavIcon>
            <NavText className="sidebar-navtext" style={sidebar_navtext}>
              Same Intrest Members
            </NavText>
          </NavItem>
          <NavItem eventKey="friends">
            <NavIcon>
              <FaUserFriends
                // className="far fa-chalkboard-teacher"

                style={sidebar_navlogo}
              />
            </NavIcon>
            <NavText className="sidebar-navtext" style={sidebar_navtext}>
              Friends
            </NavText>
          </NavItem>
          <NavItem eventKey="active members">
            <NavIcon>
              <BsPersonLinesFill style={sidebar_navlogo} />
            </NavIcon>
            <NavText className="sidebar-navtext" style={sidebar_navtext}>
              Online Members
            </NavText>
          </NavItem>
          <NavItem eventKey="support">
            <NavIcon>
              <BiPhoneCall
                // className="fa fa-user-graduate"
                className="fas fa-phone"
                style={sidebar_navlogo}
              />
            </NavIcon>
            <NavText className="sidebar_navtext" style={sidebar_navtext}>
              Support
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
